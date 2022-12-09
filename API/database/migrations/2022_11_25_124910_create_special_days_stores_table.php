<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('special_days_stores', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            //$table->integer('special_day_id');
            //$table->integer('store_id');

            $table->foreignId('special_day_id')->constrained(); //->onDelete('cascade');
            $table->foreignId('store_id')->constrained(); //->onDelete('cascade');

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
        Schema::dropIfExists('special_days_stores');
    }
};
