<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->integer('user_id');      //foreign key
            $table->string('url', 1000);
            $table->enum('type', ['document', 'store_img', 'product_img', 'profile_img', 'brands_img']);
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('files');
    }
};
