<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Order;
use App\OrderProduct;
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

        $orders = Order::where('user_id', Auth::user()->id)
            ->with('orderProduct')
            ->get();

        $ordersList = array_map(function ($item){
            $order = new \stdClass();

            $order->order = $item['id'];
            $order->date = $item['created_at'];
            $order->numberProducts = count($item['order_product']);
            $order->sumTotal = $item['sum_total'];

            return $order;
        }, $orders->toArray());

//        sleep(5);

        return response()->json($ordersList, 200);

    }


}
