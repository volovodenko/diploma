<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\AnonymousUser;
use App\Order;
use App\OrderProduct;
use App\User;
use Validator;


class OrderController extends Controller
{
    private $newOrder;


    public function __construct()
    {
        $this->newOrder = new Order();
    }


    public function saveOrder(Request $request)
    {

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
        $user = User::find(Auth::user()->id);

        //Save data for exist user
        $this->saveUserData($user, $request);

        //Save new order data
        $this->saveNewOrderData($user->id, $request->sumTotal, $request->comment);

        //Save order products
        $this->saveNewOrderProducts($request->order);

        return;

    }


    public function saveOrderAnonymousUser($request)
    {

        //Save anonymous user
        $user = AnonymousUser::where('phone', $request->phone)->first();

        $newUser = !$user ? new AnonymousUser() : $user;


        //Save data for new user
        $this->saveUserData($newUser, $request, true);

        //Save new order data
        $this->saveNewOrderData($newUser->id, $request->sumTotal, $request->comment,true);

        //Save order products
        $this->saveNewOrderProducts($request->order);

        return;

    }


    protected function saveUserData($user, $request, $newUser = false){
        $user->fio = $request->fio;
        $user->phone = $request->phone;
        $user->payment_type_id = $request->paymentId;
        $user->delivery_method_id = $request->deliveryMethodId;
        $user->transporter_id = $request->transporterId;
        $user->delivery_city = $request->deliveryCity;
        $user->delivery_city_ref = $request->deliveryCityRef;
        $user->delivery_warehouse = $request->deliveryWarehouse;
        $user->delivery_warehouse_ref = $request->deliveryWarehouseRef;

        if ($newUser){
            $user->email = $request->email;
        }

        $user->save();

        return;
    }


    protected function saveNewOrderData($userId, $sumTotal, $comment, $anonymous = false)
    {

        if ($anonymous) {
            $this->newOrder->anonymous = true;
        }

        $this->newOrder->user_id = $userId;
        $this->newOrder->sum_total = $sumTotal;
        $this->newOrder->comment = $comment;

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


}
