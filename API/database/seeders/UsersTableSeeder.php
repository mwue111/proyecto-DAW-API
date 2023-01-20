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
            'username' => 'EmilioMartinez',
            'name' => 'Emilio',
            'surname1' => 'Martínez',
            'surname2' => 'Sánchez',
            'email' => 'emilio@nombrereal.com',
            'password' => 'password',
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
            'username' => 'jackieChan',
            'name' => 'Quian',
            'surname1' => 'Martínez',
            'surname2' => 'Montero',
            'email' => 'chanchitofeliz@nombrereal.com',
            'password' => 'password',
            'birth_date' => '2020-09-03',
            'type' => 'owner'
        ]);
        DB::table('users')->insert([
            'username' => 'ari',
            'name' => 'irene',
            'surname1' => 'montero',
            'surname2' => 'admin',
            'email' => 'ari@admin.com',
            'password' => '12345678',
            'birth_date' => '1952-09-03',
            'type' => 'administrator'
        ]);
        DB::table('users')->insert([
            'username' => 'dany',
            'name' => 'irene',
            'surname1' => 'montero',
            'surname2' => 'admin',
            'email' => 'dany@admin.com',
            'password' => '$2y$10$NqlpmGukcRA9rlG0IC2dgOG2l5Sp290xmDUZZ.62Qg.LXj6n6mkpe',
            'birth_date' => '1952-09-03',
            'type' => 'administrator'
        ]);
    }
}
