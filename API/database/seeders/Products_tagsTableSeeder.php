<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Products_tagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products_tags')->insert([
            'product_id' => 1,
            'tag_id' => 1,
        ]); 

        DB::table('products_tags')->insert([
            'product_id' => 1,
            'tag_id' => 2,
        ]); 

        DB::table('products_tags')->insert([
            'product_id' => 1,
            'tag_id' => 3,
        ]); 

        DB::table('products_tags')->insert([
            'product_id' => 2,
            'tag_id' => 1,
        ]); 

        DB::table('products_tags')->insert([
            'product_id' => 2,
            'tag_id' => 2,
        ]); 
    }
}
