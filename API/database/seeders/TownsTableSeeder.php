<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class TownsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('towns')->insert([
            'id' => 1,
            'name' => 'Almería',
            'state_id' => 1
        ]);
        DB::table('towns')->insert([
            'id' => 2,
            'name' => 'Vícar',
            'state_id' => 1
        ]);
        DB::table('towns')->insert([
            'id' => 3,
            'name' => 'Adra',
            'state_id' => 1
        ]);
        DB::table('towns')->insert([
            'id' => 4,
            'name' => 'El Ejido',
            'state_id' => 1
        ]);
        DB::table('towns')->insert([
            'id' => 5,
            'name' => 'Motril',
            'state_id' => 2
        ]);
    }
}
