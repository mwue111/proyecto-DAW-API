<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Brands_imgTableSeeder extends Seeder
{
    public function run()
    {
       DB::table('brands_img')->insert([
        'brand_id' => 1
       ]);
       DB::table('brands_img')->insert([
        'brand_id' => 2
       ]);
       DB::table('brands_img')->insert([
        'brand_id' => 3
       ]);
       DB::table('brands_img')->insert([
        'brand_id' => 4
       ]);
       DB::table('brands_img')->insert([
        'brand_id' => 5
       ]);
    }
}
