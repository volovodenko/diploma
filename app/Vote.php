<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{

    public $timestamps = false;

    protected $casts = [
        'id' => 'integer',
        'user_id' => 'integer',
        'comment_id' => 'integer',
        'vote_up' => 'boolean',
        'vote_down' => 'boolean',
    ];
}
