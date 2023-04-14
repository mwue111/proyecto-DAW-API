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
        DB::table('products_tags')->insert([
            'product_id' => 3,
            'tag_id' => 2,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 3,
            'tag_id' => 4,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 4,
            'tag_id' => 1,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 4,
            'tag_id' => 2,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 4,
            'tag_id' => 3,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 5,
            'tag_id' => 4,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 5,
            'tag_id' => 7,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 6,
            'tag_id' => 1,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 6,
            'tag_id' => 8,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 7,
            'tag_id' => 7,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 7,
            'tag_id' => 8,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 8,
            'tag_id' => 5,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 8,
            'tag_id' => 9,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 9,
            'tag_id' => 6,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 9,
            'tag_id' => 7,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 10,
            'tag_id' => 1,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 10,
            'tag_id' => 2,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 10,
            'tag_id' => 4,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 11,
            'tag_id' => 10,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 12,
            'tag_id' => 9,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 13,
            'tag_id' => 10,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 14,
            'tag_id' => 10,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 15,
            'tag_id' => 10,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 16,
            'tag_id' => 10,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 17,
            'tag_id' => 10,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 18,
            'tag_id' => 10,
        ]);
        DB::table('products_tags')->insert([
            'product_id' => 19,
            'tag_id' => 10,
        ]);
    }
}
