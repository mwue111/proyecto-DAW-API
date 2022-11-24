<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('address', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->string('road_type', 45);
            $table->integer('zip_code');
            $table->integer('number');
            $table->string('name', 100);
            $table->integer('town_id');
            $table->string('remarks', 1000);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('address');
    }
};
