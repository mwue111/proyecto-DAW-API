<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('profiles_img', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->integer('user_id'); //repetido: está en files.
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('profiles_img');
    }
};
