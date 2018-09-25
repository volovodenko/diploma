<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PaymentTypes;

class PaymentController extends Controller
{

    public function getPayments()
    {
        $payments = PaymentTypes::with('paymentInfo')
            ->get();

        return response($payments, 200);

    }
}
