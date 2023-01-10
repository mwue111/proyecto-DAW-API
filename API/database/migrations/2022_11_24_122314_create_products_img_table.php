<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products_img', function (Blueprint $table) {
            $table->foreignId('file_id')->constrained()->primary();
            $table->integer('product_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products_img');
    }
};
