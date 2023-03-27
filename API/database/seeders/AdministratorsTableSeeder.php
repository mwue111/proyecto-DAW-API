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
            'user_id' => 1,
            'last_login' => '2022-11-14 00:00:00'
        ]);
        DB::table('administrators')->insert([
            'user_id' => 2,
            'last_login' => '2022-11-14 00:00:00'
        ]);
    }
}
