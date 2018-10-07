<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('isAdmin')->default(false);
            $table->string('email');
            $table->string('password');
            $table->string('name'); //nickname
            $table->string('fio')->nullable()->default(null);
            $table->string('phone')->nullable()->default(null);
            $table->unsignedInteger('payment_type_id')->default(1);
            $table->foreign('payment_type_id')->references('id')->on('payment_types');
            $table->unsignedInteger('delivery_method_id')->default(1);
            $table->foreign('delivery_method_id')->references('id')->on('delivery_methods');
            $table->unsignedInteger('transporter_id')->nullable()->default(null);
            $table->foreign('transporter_id')->references('id')->on('transporters');
            $table->string('delivery_city')->nullable()->default(null);
            $table->string('delivery_city_ref')->nullable()->default(null);
            $table->string('delivery_warehouse')->nullable()->default(null);
            $table->string('delivery_warehouse_ref')->nullable()->default(null);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
