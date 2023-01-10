<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Store_imgsTableSeeder extends Seeder
{
    
    public function run() {
        DB::table('store_imgs')->insert([
            'file_id' => 7,
            'store_id' => 4,
        ]);
    }
}
