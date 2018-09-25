<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AnonymousUser extends Model
{
    protected $table = "anonymous_users";


    protected $casts = [
        'id' => 'integer',
        'payment_type_id' => 'integer',
        'delivery_method_id' => 'integer',
        'transporter_id' => 'integer',
    ];
}
