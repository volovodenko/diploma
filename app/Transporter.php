<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transporter extends Model
{
    public $timestamps = false;

    protected $casts = [
        'id' => 'integer',
    ];
}
