<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Product_imgsTableSeeder extends Seeder
{
    public function run(){
       DB::table('product_imgs')->insert([
        'file_id' => 8,
        'product_id' => 1,
       ]); 
       
       DB::table('product_imgs')->insert([
        'file_id' => 9,
        'product_id' => 2,
       ]); 
       
       DB::table('product_imgs')->insert([
        'file_id' => 10,
        'product_id' => 3,
       ]); 
       
       DB::table('product_imgs')->insert([
        'file_id' => 11,
        'product_id' => 4,
       ]); 
       
       DB::table('product_imgs')->insert([
        'file_id' => 12,
        'product_id' => 5,
       ]); 

       DB::table('product_imgs')->insert([
        'file_id' => 13,
        'product_id' => 6,
       ]); 
       
    }
}
