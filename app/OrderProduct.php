<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    protected $table = "orders_products";
    public $timestamps = false;


    protected $casts = [
        'id' => 'integer',
        'order_id' => 'integer',
        'product_id' => 'integer',
        'price' => 'integer',
        'buy_quantity' => 'integer',
    ];
}
