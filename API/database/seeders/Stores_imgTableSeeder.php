<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Stores_imgTableSeeder extends Seeder
{
    
    public function run() {
        DB::table('stores_img')->insert([
            'stores_id' => 1
        ]);
        DB::table('stores_img')->insert([
            'stores_id' => 2
        ]);
        DB::table('stores_img')->insert([
            'stores_id' => 3
        ]);
        DB::table('stores_img')->insert([
            'stores_id' => 4
        ]);
    }
}
