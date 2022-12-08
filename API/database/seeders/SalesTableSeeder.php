<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class SalesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('sales')->insert([
            'store_id' => 1,
            'product_id' => 1,
            'date_start' => '2022-12-01',
            'date_end' => '2020-12-31',
            'final_price' => 1.49
        ]);
        DB::table('sales')->insert([
            'store_id' => 4,
            'product_id' => 5,
            'date_start' => '2022-01-01',
            'date_end' => '2020-01-31',
            'final_price' => 15
        ]);
        DB::table('sales')->insert([
            'store_id' => 5,
            'product_id' => 3,
            'date_start' => '2022-01-01',
            'date_end' => '2020-01-31',
            'final_price' => 10
        ]);
    }
}
