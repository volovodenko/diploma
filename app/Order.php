<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

    protected $casts = [
        'id' => 'integer',
        'user_id' => 'integer',
        'created_at' => 'string',
        'updated_at' => 'string',
        'checked' => 'boolean',
    ];

    public function orderProduct()
    {
        return $this->hasMany('App\OrderProduct');
    }
}
