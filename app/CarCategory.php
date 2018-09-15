<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarCategory extends Model
{
    protected $table = "car_categories";
    public $timestamps = false;


    protected $casts = [
        'id' => 'integer',
        'parent_id' => 'integer'
    ];

}
