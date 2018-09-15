<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarModelsCarCategories extends Model
{

    protected $table = "car_models_car_categories";
    public $timestamps = false;


    protected $casts = [
        'id' => 'integer',
        'car_model_id' => 'integer',
        'car_category_id' => 'integer',
        'parent_id' => 'integer'
    ];


    public function carCategory()
    {
        return $this->belongsTo('App\CarCategory');
    }

    public function carModel()
    {
        return $this->belongsTo('App\CarModel');
    }
}
