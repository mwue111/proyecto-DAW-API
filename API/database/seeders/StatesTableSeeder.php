<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('states')->insert([
            'id' => 1,
            'name' => 'Almería',
        ]);
        DB::table('states')->insert([
            'id' => 2,
            'name' => 'Granada',
        ]);
        DB::table('states')->insert([
            'id' => 3,
            'name' => 'Málaga',
        ]);
        DB::table('states')->insert([
            'id' => 4,
            'name' => 'Cádiz',
        ]);
        DB::table('states')->insert([
            'id' => 5,
            'name' => 'Córdoba',
        ]);
    }
}
