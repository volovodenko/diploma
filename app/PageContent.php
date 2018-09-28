<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PageContent extends Model
{
    public $timestamps = false;
    protected $table = "page_content";


    protected $casts = [
        'id' => 'integer'
    ];
}
