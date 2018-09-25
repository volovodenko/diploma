<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentInfo extends Model
{
    public $timestamps = false;
    protected $table = "payment_info";


    protected $casts = [
        'id' => 'integer',
        'payment_types_id' => 'integer'
    ];
}
