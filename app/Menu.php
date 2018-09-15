<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    public $timestamps = false;


    protected $casts = [
        'id' => 'integer'
    ];
}


