<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Order;
use App\OrderProduct;
use App\PaymentTypes;
use App\DeliveryMethod;
use App\Transporter;
use Validator;


class OrderController extends Controller
{
    private $newOrder;


    public function saveOrder(Request $request)
    {
        $this->newOrder = new Order();

        $validator = Validator::make($request->all(), [
            'order' => 'required|array',
            'fio' => 'required|string|max:255',
            'phone' => 'required|string|max:17',
            'email' => 'nullable|string|email|max:255',
            'comment' => 'nullable|string|max:255',
            'sumTotal' => 'required|string|max:255',
            'paymentId' => 'required|integer|unique:payment_types,id,' . $request->paymentId,
            'deliveryMethodId' => 'required|integer|unique:delivery_methods,id,' . $request->deliveryMethodId,
            'transporterId' => 'nullable|nullable|integer|unique:transporters,id,' . $request->transporterId,
            'deliveryCity' => 'nullable|string|max:255',
            'deliveryCityRef' => 'nullable|string|max:255',
            'deliveryWarehouse' => 'nullable|string|max:255',
            'deliveryWarehouseRef' => 'nullable|string|max:255',
        ]);


        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        //если пользователь авторизировался
        if (Auth::check()) {
            $this->saveOrderAuthUser($request);
        } else {
            $this->saveOrderAnonymousUser($request);
        }


        return response()->json(['order' => $this->newOrder->id], 200);

    }


    public function saveOrderAuthUser($request)
    {

        //Save new order data
        $this->saveNewOrderData(Auth::user()->id, $request);

        //Save order products
        $this->saveNewOrderProducts($request->order);

        return;

    }


    public function saveOrderAnonymousUser($request)
    {

        //Save new order data
        $this->saveNewOrderData(0, $request, true);

        //Save order products
        $this->saveNewOrderProducts($request->order);

        return;

    }


    protected function saveNewOrderData($userId, $request, $anonymous = false)
    {

        if ($anonymous) {
            $this->newOrder->anonymous = true;
        }

        $this->newOrder->fio = $request->fio;
        $this->newOrder->phone = $request->phone;
        $this->newOrder->email = $request->email;
        $this->newOrder->user_id = $userId;
        $this->newOrder->sum_total = $request->sumTotal;
        $this->newOrder->comment = $request->comment;
        $this->newOrder->payment_type_id = $request->paymentId;
        $this->newOrder->delivery_method_id = $request->deliveryMethodId;
        $this->newOrder->transporter_id = $request->transporterId;
        $this->newOrder->delivery_city = $request->deliveryCity;
        $this->newOrder->delivery_city_ref = $request->deliveryCityRef;
        $this->newOrder->delivery_warehouse = $request->deliveryWarehouse;
        $this->newOrder->delivery_warehouse_ref = $request->deliveryWarehouseRef;

        $this->newOrder->save();

        return;
    }


    protected function saveNewOrderProducts($order)
    {
        array_walk($order, function ($product) {
            $newOrderProduct = new OrderProduct();

            $newOrderProduct->order_id = $this->newOrder->id;
            $newOrderProduct->product_id = $product['id'];
            $newOrderProduct->price = $product['price'];
            $newOrderProduct->buy_quantity = $product['buyQuantity'];

            $newOrderProduct->save();
        });

        return;
    }


    public function getOrdersList()
    {
        $orders = Order::orderBy('id', 'desc')
            ->where('user_id', Auth::user()->id)
            ->with('orderProduct')
            ->get();


        $ordersList = $this->prepareOrdersList($orders->toArray());


        return response()->json($ordersList, 200);

    }


    public function prepareOrdersList($orders)
    {
        $ordersList = array_map(function ($item) {
            $order = new \stdClass();

            $order->order = $item['id'];
            $order->date = $item['created_at'];
            $order->sumTotal = $item['sum_total'];

            if (Auth::user()->isAdmin) {
                $order->checked = $item['checked'];
            }

            $numberProducts = 0;

            array_walk($item['order_product'], function ($item) use (&$numberProducts) {
                $numberProducts += $item['buy_quantity'];
            });

            $order->numberProducts = $numberProducts;

            return $order;

        }, $orders);


        return $ordersList;
    }


    public function getDashboardOrdersList()
    {
        if (!Auth::user()->isAdmin) {
            return response()->json(['message' => 'API: Forbidden'], 403);
        }


        $orders = Order::orderBy('id', 'desc')
            ->with('orderProduct')
            ->get();


        $ordersList = $this->prepareOrdersList($orders->toArray());


        return response()->json($ordersList, 200);

    }


    public function getOrder(ProductController $product, $orderId)
    {

        if (Auth::user()->isAdmin) {
            $orderData = Order::with('orderProduct')
                ->find($orderId);
        } else {
            $orderData = Order::where('user_id', Auth::user()->id)
                ->with('orderProduct')
                ->find($orderId);
        }

        if (!$orderData) {
            return response()->json(['message' => 'API: Order not found'], 200);
        }


        $order = new \stdClass();

        $order->id = $orderData->id;
        $order->fio = $orderData->fio;
        $order->phone = $orderData->phone;
        $order->email = $orderData->email;
        $order->sum_total = $orderData->sum_total;
        $order->comment = $orderData->comment;
        $order->payment = PaymentTypes::find($orderData->payment_type_id)->type;
        $order->delivery = DeliveryMethod::find($orderData->delivery_method_id)->title;
        $order->created_at = $orderData->created_at;
        $order->updated_at = $orderData->updated_at;

        if (Auth::user()->isAdmin) {
            $order->checked = $orderData->checked;
        }


        //если не самовывоз
        if (!mb_strstr(mb_strtolower($order->delivery), "самовывоз")) {
            $order->transporter = Transporter::find($orderData->transporter_id)->title;
            $order->delivery_city = $orderData->delivery_city;
            $order->delivery_warehouse = $orderData->delivery_warehouse;
        }

        $numberProducts = 0;

        $order->products = array_map(function ($item) use ($product, &$numberProducts) {

            $currentProduct = $product->getProductById($item['product_id']);

            $item['title'] = $currentProduct->title;
            $item['slug'] = $currentProduct->slug;

            $item['buyQuantity'] = $item['buy_quantity'];
            $numberProducts += $item['buy_quantity'];

            unset($item['order_id']);
            unset($item['product_id']);
            unset($item['product']);
            unset($item['buy_quantity']);

            return $item;

        }, $orderData->toArray()['order_product']);


        $order->numberProducts = $numberProducts;


        return response()->json(['message' => 'Success', 'order' => $order], 200);

    }


    public function orderAccept(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer|unique:orders,id,' . $request->id,
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        if (!Auth::user()->isAdmin) {
            return response()->json(['message' => 'API: Forbidden'], 403);
        }

        $order=Order::find($request->id);
        $order->checked=true;
        $order->save();

        return response()->json(['message' => 'Success'], 200);

    }

}
