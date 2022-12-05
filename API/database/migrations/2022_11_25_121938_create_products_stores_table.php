<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products_stores', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->integer('products_id');
            $table->integer('stores_id');
            $table->integer('units_id'); //unidad de medida
            $table->integer('stock');
            $table->float('value');
            $table->string('remarks', 1000);
            $table->timestamps();
        });
    }
   public function down()
    {
        Schema::dropIfExists('products_stores');
    }
};
