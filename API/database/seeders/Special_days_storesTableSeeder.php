<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Special_days_storesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('special_days_stores')->insert([
             'special_day_id' => 1,
             'store_id' => 3,
        ]);
        DB::table('special_days_stores')->insert([
             'special_day_id' => 2,
             'store_id' => 2,
        ]);
        DB::table('special_days_stores')->insert([
             'special_day_id' => 3,
             'store_id' => 1,
        ]);
        DB::table('special_days_stores')->insert([
             'special_day_id' => 4,
             'store_id' => 1,
        ]);
        DB::table('special_days_stores')->insert([
             'special_day_id' => 5,
             'store_id' => 4,
        ]);
    }
}
