<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products_stores', function (Blueprint $table) {
            $table->integer('product_id');
            $table->integer('store_id');
            $table->string('unit', 100); //unidad de medida
            $table->integer('stock');
            $table->float('value');
            $table->string('remarks', 1000);
            $table->timestamps();
            $table->primary(['product_id', 'store_id']);
        });
    }
   public function down()
    {
        Schema::dropIfExists('products_stores');
    }
};
