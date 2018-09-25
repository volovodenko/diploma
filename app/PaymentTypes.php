<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentTypes extends Model
{
    public $timestamps = false;
    protected $table = "payment_types";


    protected $casts = [
        'id' => 'integer'
    ];

    public function paymentInfo()
    {
        return $this->hasMany('App\PaymentInfo');
    }
}
