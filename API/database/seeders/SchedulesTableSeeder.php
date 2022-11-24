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
            'timeslot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 1,
            'timeslot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 2,
            'timeslot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 2,
            'timeslot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 3,
            'timeslot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 3,
            'timeslot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 4,
            'timeslot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 4,
            'timeslot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 5,
            'timeslot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 5,
            'timeslot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'timeslot_id' => 1
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'timeslot_id' => 3
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 1,
            'timeslot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 1,
            'timeslot_id' => 4
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 2,
            'timeslot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 2,
            'timeslot_id' => 4
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 3,
            'timeslot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 3,
            'timeslot_id' => 4
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 4,
            'timeslot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 4,
            'timeslot_id' => 4
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 5,
            'timeslot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 5,
            'timeslot_id' => 4
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'timeslot_id' => 2
        ]);   
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'timeslot_id' => 4
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 1,
            'timeslot_id' => 5
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 2,
            'timeslot_id' => 5
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 3,
            'timeslot_id' => 5
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 4,
            'timeslot_id' => 5
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 5,
            'timeslot_id' => 5
        ]);
        DB::table('schedules')->insert([
            'day_of_week' => 6,
            'timeslot_id' => 5
        ]);
    }
}
