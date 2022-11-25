<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Categories_productsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories_products')->insert([
             'category_id' => 3,
             'product_id' => 1,
        ]);
        DB::table('categories_products')->insert([
             'category_id' => 1,
             'product_id' => 2,
        ]);
        DB::table('categories_products')->insert([
             'category_id' => 3,
             'product_id' => 3,
        ]);
        DB::table('categories_products')->insert([
             'category_id' => 1,
             'product_id' => 4,
        ]);
        DB::table('categories_products')->insert([
             'category_id' => 1,
             'product_id' => 5,
        ]);
    }
}
