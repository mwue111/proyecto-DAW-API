<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Brand_imgsTableSeeder extends Seeder
{
    public function run()
    {
       DB::table('brand_imgs')->insert([
        'file_id' => 9,
        'brand_id' => 1,
       ]);
    }
}
