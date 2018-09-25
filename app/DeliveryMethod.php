<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeliveryMethod extends Model
{
    public $timestamps = false;
    protected $table = "delivery_methods";


    protected $casts = [
        'id' => 'integer'
    ];
}
