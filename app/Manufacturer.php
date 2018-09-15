<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Manufacturer extends Model
{
    public $timestamps = false;


    protected $casts = [
        'id' => 'integer',
    ];
}
