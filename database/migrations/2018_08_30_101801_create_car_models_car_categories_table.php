<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCarModelsCarCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_models_car_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('car_model_id');
            $table->foreign('car_model_id')->references('id')->on('car_models');
            $table->unsignedInteger('car_category_id');
            $table->foreign('car_category_id')->references('id')->on('car_categories');
            $table->unsignedInteger('parent_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('car_models_car_categories');
    }
}
