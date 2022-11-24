<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Profiles_imgTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('profiles_img')->insert([
            'user_id' => 5
        ]);        
        DB::table('profiles_img')->insert([
            'user_id' => 4
        ]);        
        DB::table('profiles_img')->insert([
            'user_id' => 2
        ]);        
        DB::table('profiles_img')->insert([
            'user_id' => 1
        ]);        
        DB::table('profiles_img')->insert([
            'user_id' => 3
        ]);        
    }
}
