<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductCarModelCarCategory extends Model
{
    protected $table = "products_car_models_car_categories";
    public $timestamps = false;


    protected $casts = [
        'id' => 'integer',
        'product_id' => 'integer',
        'car_model_id' => 'integer',
        'car_category_id' => 'integer',
    ];

    public function product()
    {
        return $this->belongsTo('App\Product');
    }
}
