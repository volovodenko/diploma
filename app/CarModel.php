<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarModel extends Model
{
    protected $table = "car_models";
    public $timestamps = false;


    protected $casts = [
        'id' => 'integer',
        'car_id' => 'integer'
    ];
}
