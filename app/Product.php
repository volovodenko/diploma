<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $timestamps = false;


    protected $casts = [
        'id' => 'integer',
        'manufacturer_id' => 'integer',
        'amount' => 'integer',
        'price' => 'integer',
    ];
}
