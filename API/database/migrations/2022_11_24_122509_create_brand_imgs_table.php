<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('brand_imgs', function (Blueprint $table) {
            $table->foreignId('file_id')->constrained()->primary()->onDelete('cascade');
            $table->integer('brand_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('brand_imgs');
    }
};
