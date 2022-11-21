<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
    
    public function up(){

        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->string('username', 100)->unique();
            $table->string('name', 100);
            $table->string('surname1', 100);
            $table->string('surname2', 100)->nullable();
            $table->string('email', 50)->unique();
            //$table->timestamp('email_verified_at')->nullable();
            $table->string('password', 50);
            $table->date('birth_date');
            $table->enum('type', ['customer', 'owner', 'admin']);
            //$table->rememberToken();
            $table->timestamps();
        });
    }

    public function down(){
        
        Schema::dropIfExists('users');
    }
};
