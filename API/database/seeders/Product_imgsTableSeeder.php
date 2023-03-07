<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Product_imgsTableSeeder extends Seeder
{
    public function run(){

        DB::table('product_imgs')->insert([
        'file_id' => 13,
        'product_id' => 1,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 14,
        'product_id' => 1,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 15,
        'product_id' => 1,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 16,
        'product_id' => 1,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 17,
        'product_id' => 2,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 18,
        'product_id' => 2,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 19,
        'product_id' => 2,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 20,
        'product_id' => 3,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 21,
        'product_id' => 3,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 22,
        'product_id' => 4,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 23,
        'product_id' => 4,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 24,
        'product_id' => 5,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 25,
        'product_id' => 6,
       ]);

       DB::table('product_imgs')->insert([
        'file_id' => 26,
        'product_id' => 7,
       ]);

    }
}
