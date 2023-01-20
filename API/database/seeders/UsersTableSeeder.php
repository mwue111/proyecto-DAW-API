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
            'type' => 'client'
        ]);
        DB::table('users')->insert([
            'username' => 'Emilio',
            'name' => 'Emilio',
            'surname1' => 'Martínez',
            'surname2' => 'Sánchez',
            'email' => 'emarsan708@g.educaand.es',
            'password' => '$2y$10$A.xuiPBFhgJ63gO2F8b.GO9D23qn811TSyy9N9RXElhX3n871DlOq',
            'birth_date' => '1875-09-03',
            'type' => 'administrator'
        ]);
        DB::table('users')->insert([
            'username' => 'juanLuis',
            'name' => 'Juan Pedro',
            'surname1' => 'Gimenez',
            'surname2' => 'Picasso',
            'email' => 'josealberto@nombrereal.com',
            'password' => 'password',
            'birth_date' => '1794-09-03',
            'type' => 'administrator'
        ]);
        DB::table('users')->insert([
            'username' => 'ari',
            'name' => 'Irene',
            'surname1' => 'Montero',
            'surname2' => 'Ayuso',
            'email' => 'ari@nombrereal.com',
            'password' => 'password',
            'birth_date' => '1955-09-03',
            'type' => 'administrator'
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
