<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Profile_imgsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('profile_imgs')->insert([
            'file_id' => 1,
        ]);        
        DB::table('profile_imgs')->insert([
            'file_id' => 2,
        ]);        
        DB::table('profile_imgs')->insert([
            'file_id' => 3,
        ]);        
        DB::table('profile_imgs')->insert([
            'file_id' => 4,
        ]);        
        DB::table('profile_imgs')->insert([
            'file_id' => 5,
        ]);        
    }
}
