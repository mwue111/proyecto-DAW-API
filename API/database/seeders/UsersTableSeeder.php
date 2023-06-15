<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder{

    public function run(){

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
            'username' => 'dany',
            'name' => 'irene',
            'surname1' => 'montero',
            'surname2' => 'admin',
            'email' => 'dany@admin.com',
            'password' => '$2y$10$NqlpmGukcRA9rlG0IC2dgOG2l5Sp290xmDUZZ.62Qg.LXj6n6mkpe',
            'birth_date' => '1952-09-03',
            'type' => 'administrator'
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
            'username' => '3meses',
            'name' => 'owner',
            'surname1' => 'antiguo',
            'surname2' => '',
            'email' => 'ownerinactivo1@nombrereal.com',
            'password' => '$2y$10$j5OH9LfhWO6rUgOa1dQxkOMhyOcQMaKzwsaAw2oQKW8jhVOqDfIu.',
            'birth_date' => '2020-09-03',
            'type' => 'owner',
            'deleted' => 1,
            'updated_at' => Carbon::now()->subMonths(3),
            // 'updated_at' => '2023-03-15',   //3 meses
        ]);

        DB::table('users')->insert([
            'username' => '6meses',
            'name' => 'client',
            'surname1' => 'antiguo',
            'surname2' => 'Montero',
            'email' => 'clientinactivo@nombrereal.com',
            'password' => '$2y$10$j5OH9LfhWO6rUgOa1dQxkOMhyOcQMaKzwsaAw2oQKW8jhVOqDfIu.',
            'birth_date' => '2020-09-03',
            'type' => 'client',
            'deleted' => 1,
            'updated_at' => Carbon::now()->subMonths(6),
            // 'updated_at' => '2023-01-15 00:00:00', //6 meses
        ]);

        DB::table('users')->insert([
            'username' => 'muchosMeses',
            'name' => 'admin',
            'surname1' => 'antiguo',
            'surname2' => '',
            'email' => 'admininactivo@nombrereal.com',
            'password' => '$2y$10$j5OH9LfhWO6rUgOa1dQxkOMhyOcQMaKzwsaAw2oQKW8jhVOqDfIu.',
            'birth_date' => '2020-09-03',
            'type' => 'administrator',
            'deleted' => 1,
            'updated_at' => '2021-01-01 00:00:00',
        ]);

    }
}
