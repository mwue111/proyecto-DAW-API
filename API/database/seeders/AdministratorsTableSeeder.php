<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class AdministratorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('administrators')->insert([
            'id' => 3,
            'last_login' => '2022-11-14 00:00:00'
        ]);
        DB::table('administrators')->insert([
            'id' => 4,
            'last_login' => '2022-11-14 00:00:00'
        ]);
        DB::table('administrators')->insert([
            'id' => 5,
            'last_login' => '2022-10-25 00:00:00'
        ]);
        DB::table('administrators')->insert([
            'id' => 2,
            'last_login' => '2022-07-02 02:37:00'
        ]);
        DB::table('administrators')->insert([
            'id' => 1,
            'last_login' => '2022-12-14 14:35:00'
        ]);
    }
}
