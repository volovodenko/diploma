<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    public $timestamps = false;


    protected $casts = [
        'id' => 'integer'
    ];

    public function carModels()
    {
        return $this->hasMany('App\CarModel');
    }
}
