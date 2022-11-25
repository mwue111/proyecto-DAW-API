<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Products_imgTableSeeder extends Seeder
{
    public function run(){
       DB::table('products_img')->insert([
        'product_id' => 1
       ]); 
       DB::table('products_img')->insert([
        'product_id' => 2
       ]); 
       DB::table('products_img')->insert([
        'product_id' => 3
       ]); 
       DB::table('products_img')->insert([
        'product_id' => 4
       ]); 
       DB::table('products_img')->insert([
        'product_id' => 5
       ]); 
    }
}
