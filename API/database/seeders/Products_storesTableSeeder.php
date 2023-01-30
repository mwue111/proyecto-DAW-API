<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Products_storesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('products_stores')->insert([
            'product_id' => 1,
            'store_id' => 1,
            'unit' => 1,
            'stock' => 2,
            'value' => 2.49,
            'remarks' => 'El kilo de pomelo está a 2.49€'
           ]); 
        DB::table('products_stores')->insert([
            'product_id' => 2,
            'store_id' => 1,
            'unit' => 1,
            'stock' => 4,
            'value' => 1.8,
            'remarks' => 'El kilo de bulgur está a 1.80€'
           ]); 
        DB::table('products_stores')->insert([
            'product_id' => 3,
            'store_id' => 1,
            'unit' => 2,
            'stock' => 2,
            'value' => 12,
            'remarks' => 'El kilo de plátano está a 12.00€'
           ]); 
        DB::table('products_stores')->insert([
            'product_id' => 4,
            'store_id' => 1,
            'unit' => 2,
            'stock' => 4,
            'value' => 0.75,
            'remarks' => 'El litro de zumo de piña está a 0.75€'
           ]); 
        DB::table('products_stores')->insert([
            'product_id' => 5,
            'store_id' => 1,
            'unit' => 2,
            'stock' => 4,
            'value' => 20,
            'remarks' => 'El litro de brugal está a 20€'
           ]); 
           DB::table('products_stores')->insert([
            'product_id' => 2,
            'store_id' => 2,
            'unit' => 1,
            'stock' => 4,
            'value' => 1.8,
            'remarks' => 'El kilo de bulgur está a 1.80€'
           ]); 
              DB::table('products_stores')->insert([
                'product_id' => 3,
                'store_id' => 2,
                'unit' => 2,
                'stock' => 2,
                'value' => 12,
                'remarks' => 'El kilo de plátano está a 12.00€'
              ]);
                DB::table('products_stores')->insert([
                    'product_id' => 4,
                    'store_id' => 2,
                    'unit' => 2,
                    'stock' => 4,
                    'value' => 0.75,
                    'remarks' => 'El litro de zumo de piña está a 0.75€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 5,
                    'store_id' => 2,
                    'unit' => 2,
                    'stock' => 4,
                    'value' => 20,
                    'remarks' => 'El litro de brugal está a 20€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 1,
                    'store_id' => 3,
                    'unit' => 1,
                    'stock' => 2,
                    'value' => 2.49,
                    'remarks' => 'El kilo de pomelo está a 2.49€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 4,
                    'store_id' => 3,
                    'unit' => 2,
                    'stock' => 4,
                    'value' => 0.75,
                    'remarks' => 'El litro de zumo de piña está a 0.75€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 5,
                    'store_id' => 3,
                    'unit' => 2,
                    'stock' => 4,
                    'value' => 20,
                    'remarks' => 'El litro de brugal está a 20€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 1,
                    'store_id' => 4,
                    'unit' => 1,
                    'stock' => 2,
                    'value' => 2.49,
                    'remarks' => 'El kilo de pomelo está a 2.49€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 2,
                    'store_id' => 4,
                    'unit' => 1,
                    'stock' => 4,
                    'value' => 1.8,
                    'remarks' => 'El kilo de bulgur está a 1.80€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 3,
                    'store_id' => 4,
                    'unit' => 2,
                    'stock' => 2,
                    'value' => 12,
                    'remarks' => 'El kilo de plátano está a 12.00€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 5,
                    'store_id' => 4,
                    'unit' => 2,
                    'stock' => 4,
                    'value' => 20,
                    'remarks' => 'El litro de brugal está a 20€'
                ]);
    }
}
