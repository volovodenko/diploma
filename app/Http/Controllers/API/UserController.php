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
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {

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
            $success['transporter'] = Transporter::find($user->transporter_id)->title;
            $success['transporterId'] = $user->transporter_id;
            $success['deliveryAddress'] = $user->delivery_city;
            $success['deliveryAddressRef'] = $user->delivery_city_ref;
            $success['deliveryWarehouse'] = $user->delivery_warehouse;
            $success['deliveryWarehouseRef'] = $user->delivery_warehouse_ref;


            return response()->json(['success' => $success], 200);

        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
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
}
