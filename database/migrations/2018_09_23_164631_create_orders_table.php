<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('anonymous')->default(false);
            $table->unsignedInteger('user_id');
            $table->string('fio');
            $table->string('phone');
            $table->string('email')->nullable()->default(null);
            $table->string('sum_total');
            $table->string('comment')->nullable();
            $table->boolean('checked')->default(false);
            $table->unsignedInteger('payment_type_id');
            $table->foreign('payment_type_id')->references('id')->on('payment_types');
            $table->unsignedInteger('delivery_method_id');
            $table->foreign('delivery_method_id')->references('id')->on('delivery_methods');
            $table->unsignedInteger('transporter_id')->nullable()->default(null);
            $table->foreign('transporter_id')->references('id')->on('transporters');
            $table->string('delivery_city')->nullable()->default(null);
            $table->string('delivery_city_ref')->nullable()->default(null);
            $table->string('delivery_warehouse')->nullable()->default(null);
            $table->string('delivery_warehouse_ref')->nullable()->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
