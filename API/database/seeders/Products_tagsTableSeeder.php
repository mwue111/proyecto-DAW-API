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
            'products_id' => 1,
            'tags_id' => 1,
        ]); 

        DB::table('products_tags')->insert([
            'products_id' => 1,
            'tags_id' => 2,
        ]); 

        DB::table('products_tags')->insert([
            'products_id' => 1,
            'tags_id' => 3,
        ]); 

        DB::table('products_tags')->insert([
            'products_id' => 2,
            'tags_id' => 1,
        ]); 

        DB::table('products_tags')->insert([
            'products_id' => 2,
            'tags_id' => 2,
        ]); 
    }
}
