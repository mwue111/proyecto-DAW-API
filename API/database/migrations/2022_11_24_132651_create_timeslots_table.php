<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('timeslots', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->time('open_time');
            $table->time('closed_time');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('timeslots');
    }
};
