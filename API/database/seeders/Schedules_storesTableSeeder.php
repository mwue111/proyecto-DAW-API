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
        DB::table('schedule_store')->insert([
            'schedule_id' => 2,
            'store_id' => 1,
        ]);

        DB::table('schedule_store')->insert([
            'schedule_id' => 4,
            'store_id' => 1,
        ]);

        DB::table('schedule_store')->insert([
            'schedule_id' => 1,
            'store_id' => 1,
        ]);
        DB::table('schedule_store')->insert([
            'schedule_id' => 2,
            'store_id' => 2,
        ]);

        DB::table('schedule_store')->insert([
            'schedule_id' => 4,
            'store_id' => 2,
        ]);

        DB::table('schedule_store')->insert([
            'schedule_id' => 1,
            'store_id' => 2,
        ]);
        DB::table('schedule_store')->insert([
            'schedule_id' => 2,
            'store_id' => 3,
        ]);

        DB::table('schedule_store')->insert([
            'schedule_id' => 4,
            'store_id' => 3,
        ]);

        DB::table('schedule_store')->insert([
            'schedule_id' => 1,
            'store_id' => 3,
        ]);
    }
}
