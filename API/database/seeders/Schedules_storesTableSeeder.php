<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Schedules_storesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('schedules_stores')->insert([
            'schedules_id' => 2,
            'stores_id' => 3,
        ]); 

        DB::table('schedules_stores')->insert([
            'schedules_id' => 4,
            'stores_id' => 3,
        ]); 

        DB::table('schedules_stores')->insert([
            'schedules_id' => 1,
            'stores_id' => 3,
        ]); 
    }
}
