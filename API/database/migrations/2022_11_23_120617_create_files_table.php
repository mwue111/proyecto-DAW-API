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
            $table->int('user_id');      //foreign key
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('files');
    }
};
