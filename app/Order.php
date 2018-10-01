<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

    protected $casts = [
        'id' => 'integer',
        'user_id' => 'integer',
    ];

    public function orderProduct()
    {
        return $this->hasMany('App\OrderProduct');
    }
}
