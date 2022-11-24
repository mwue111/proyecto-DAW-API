<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class UsersTableSeeder extends Seeder{

    public function run(){
        DB::table('users')->insert([
            'username' => 'IvanPuga',
            'name' => 'David',
            'surname1' => 'Puga',
            'surname2' => 'Ruano',
            'email' => 'ivan@nombrereal.com',
            'password' => 'password',
            'birth_date' => '2020-09-03',
            'type' => 'customer'
        ]);
        DB::table('users')->insert([
            'username' => 'EmilioMartinez',
            'name' => 'Emilio',
            'surname1' => 'Martínez',
            'surname2' => 'Sánchez',
            'email' => 'emilio@nombrereal.com',
            'password' => 'password',
            'birth_date' => '1875-09-03',
            'type' => 'admin'
        ]);
        DB::table('users')->insert([
            'username' => 'juanLuis',
            'name' => 'Juan Pedro',
            'surname1' => 'Gimenez',
            'surname2' => 'Picasso',
            'email' => 'josealberto@nombrereal.com',
            'password' => 'password',
            'birth_date' => '1794-09-03',
            'type' => 'admin'
        ]);
        DB::table('users')->insert([
            'username' => 'ari',
            'name' => 'Irene',
            'surname1' => 'Montero',
            'surname2' => 'Ayuso',
            'email' => 'ari@nombrereal.com',
            'password' => 'password',
            'birth_date' => '1955-09-03',
            'type' => 'admin'
        ]);
        DB::table('users')->insert([
            'username' => 'jackieChan',
            'name' => 'Quian',
            'surname1' => 'Martínez',
            'surname2' => 'Montero',
            'email' => 'chanchitofeliz@nombrereal.com',
            'password' => 'password',
            'birth_date' => '2020-09-03',
            'type' => 'owner'
        ]);
    }
}
