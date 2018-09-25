<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DeliveryMethod;

class DeliveryMethodController extends Controller
{
    public function getDeliveryMethods()
    {
        $deliveryMethods = DeliveryMethod::all();

        return response($deliveryMethods, 200);
    }
}
