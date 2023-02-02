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
        Schema::create('stores', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->string('name', 100);
            $table->integer('address_id');
            $table->string('email', 45);
            $table->char('telephone1', 20);
            $table->char('telephone2', 20);
            $table->double('longitude');
            $table->double('latitude');
            $table->string('description', 500);
            $table->Integer('user_id');
            $table->tinyInteger('deleted');
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
        Schema::dropIfExists('stores');
    }
};
