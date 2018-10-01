<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\PaymentTypes;
use App\DeliveryMethod;
use App\Transporter;

class UserController extends Controller
{
    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        if (Auth::attempt(['email' => request('userName'), 'password' => request('password')])) {

            $success = $this->getLoginUserData();
            return response()->json(['success' => $success], 200);
        }


        if (Auth::attempt(['name' => request('userName'), 'password' => request('password')])) {

            $success = $this->getLoginUserData();
            return response()->json(['success' => $success], 200);
        }


        return response()->json(['error' => 'Unauthorised'], 401);

    }


    public function getLoginUserData()
    {
        $user = Auth::user();

        $success['token'] = $user->createToken('MyApp')->accessToken;
        $success['name'] = $user->name;
        $success['email'] = $user->email;
        $success['fio'] = $user->fio;
        $success['phone'] = $user->phone;
        $success['payment'] = PaymentTypes::find($user->payment_type_id)->type;
        $success['paymentId'] = $user->payment_type_id;
        $success['deliveryMethod'] = DeliveryMethod::find($user->delivery_method_id)->title;
        $success['deliveryMethodId'] = $user->delivery_method_id;
        $success['transporter'] = $user->transporter_id ? Transporter::find($user->transporter_id)->title : '';
        $success['transporterId'] = $user->transporter_id;
        $success['deliveryAddress'] = $user->delivery_city;
        $success['deliveryAddressRef'] = $user->delivery_city_ref;
        $success['deliveryWarehouse'] = $user->delivery_warehouse;
        $success['deliveryWarehouseRef'] = $user->delivery_warehouse_ref;

        return $success;
    }

    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string',
            'c_password' => 'required|string|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $input = $request->all();
        $input['password'] = password_hash($input['password'], PASSWORD_DEFAULT);
        $user = User::create($input);

        $success['token'] = $user->createToken('MyApp')->accessToken;
        $success['name'] = $user->name;
        $success['email'] = $user->email;

        return response()->json(['success' => $success], 200);
    }


    /**
     * details api
     *
     * @return \Illuminate\Http\Response
     */
    public function details()
    {
        $user = Auth::user();

        return response()->json(['success' => $user], 200);
    }


    public function validateName(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:3|max:255|unique:users',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 200);
        }

        return response()->json(['message' => 'Success'], 200);
    }


    public function validateEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 200);
        }

        return response()->json(['message' => 'Success'], 200);
    }


    public function saveUserData(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fio' => 'required|string|max:255',
            'phone' => 'required|string|max:17',
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

        $user = Auth::user();

        $user->fio = $request->fio;
        $user->phone = $request->phone;
        $user->payment_type_id = $request->paymentId;
        $user->delivery_method_id = $request->deliveryMethodId;
        $user->transporter_id = $request->transporterId;
        $user->delivery_city = $request->deliveryCity;
        $user->delivery_city_ref = $request->deliveryCityRef;
        $user->delivery_warehouse = $request->deliveryWarehouse;
        $user->delivery_warehouse_ref = $request->deliveryWarehouseRef;

        $user->save();

        return response()->json(['message' => 'Success'], 200);

    }
}
