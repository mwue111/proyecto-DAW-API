<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB; 

class SchedulesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('schedules')->insert([
            'day_of_week' => 1,
            'time_slot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 1,
            'time_slot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 2,
            'time_slot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 2,
            'time_slot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 3,
            'time_slot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 4,
            'time_slot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 5,
            'time_slot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'time_slot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 7,
            'time_slot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 5,
            'time_slot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'time_slot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'time_slot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 1,
            'time_slot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 1,
            'time_slot_id' => 4
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 2,
            'time_slot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 2,
            'time_slot_id' => 4
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 3,
            'time_slot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 3,
            'time_slot_id' => 4
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 4,
            'time_slot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 4,
            'time_slot_id' => 4
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 5,
            'time_slot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 5,
            'time_slot_id' => 4
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'time_slot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'time_slot_id' => 4
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 1,
            'time_slot_id' => 5
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 2,
            'time_slot_id' => 5
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 3,
            'time_slot_id' => 5
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 4,
            'time_slot_id' => 5
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 5,
            'time_slot_id' => 5
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'time_slot_id' => 5
        ]);
    }
}
