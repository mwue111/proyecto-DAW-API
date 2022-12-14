<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class TimeslotsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('time_slots')->insert([
            'open_time' => '10:00',
            'closed_time' => '14:30'
        ]);
        DB::table('time_slots')->insert([
            'open_time' => '9:00',
            'closed_time' => '14:00'
        ]);
        DB::table('time_slots')->insert([
            'open_time' => '16:30',
            'closed_time' => '20:30'
        ]);
        DB::table('time_slots')->insert([
            'open_time' => '17:00',
            'closed_time' => '21:00'
        ]);
        DB::table('time_slots')->insert([
            'open_time' => '10:00',
            'closed_time' => '21:00'
        ]);
    }
}
