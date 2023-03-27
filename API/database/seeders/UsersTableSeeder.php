<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class UsersTableSeeder extends Seeder{

    public function run(){
        DB::table('users')->insert([
            'username' => 'IvanPuga',
            'name' => 'Iván',
            'surname1' => 'Puga',
            'surname2' => 'Ruano',
            'email' => 'ivan@nombrereal.com',
            'password' => 'password',
            'birth_date' => '2020-09-03',
            'type' => 'client',
            'deleted' => 0,
        ]);

        DB::table('users')->insert([
            'username' => 'Emilio',
            'name' => 'Emilio',
            'surname1' => 'Martínez',
            'surname2' => 'Sánchez',
            'email' => 'emarsan708@g.educaand.es',
            'password' => '$2y$10$A.xuiPBFhgJ63gO2F8b.GO9D23qn811TSyy9N9RXElhX3n871DlOq',
            'birth_date' => '1875-09-03',
            'type' => 'administrator',
            'deleted' => 0,
        ]);

        DB::table('users')->insert([
            'username' => 'juanLuis',
            'name' => 'Juan Pedro',
            'surname1' => 'Gimenez',
            'surname2' => 'Picasso',
            'email' => 'josealberto@nombrereal.com',
            'password' => 'password',
            'birth_date' => '1794-09-03',
            'type' => 'administrator',
            'deleted' => 0,
        ]);

        DB::table('users')->insert([
            'username' => 'jackieChan',
            'name' => 'Quian',
            'surname1' => 'Martínez',
            'surname2' => 'Montero',
            'email' => 'chanchitofeliz@nombrereal.com',
            'password' => '$2y$10$j5OH9LfhWO6rUgOa1dQxkOMhyOcQMaKzwsaAw2oQKW8jhVOqDfIu.',
            'birth_date' => '2020-09-03',
            'type' => 'owner',
            'deleted' => 0,
        ]);
        DB::table('users')->insert([
            'username' => 'jackieChan falso',
            'name' => 'chang',
            'surname1' => 'falso',
            'surname2' => 'falsísimo',
            'email' => 'chanchitofalso@nombrereal.com',
            'password' => 'password',
            'birth_date' => '2023-09-03',
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
