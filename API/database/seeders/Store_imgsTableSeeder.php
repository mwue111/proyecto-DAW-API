<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Store_imgsTableSeeder extends Seeder
{

    public function run() {

        DB::table('store_imgs')->insert([
            'file_id' => 29,
            'store_id' => 1,
        ]);

        DB::table('store_imgs')->insert([
            'file_id' => 30,
            'store_id' => 1,
        ]);

        DB::table('store_imgs')->insert([
            'file_id' => 31,
            'store_id' => 1,
        ]);

        DB::table('store_imgs')->insert([
            'file_id' => 32,
            'store_id' => 2,
        ]);

        DB::table('store_imgs')->insert([
            'file_id' => 7,
            'store_id' => 4,
        ]);

        DB::table('store_imgs')->insert([
            'file_id' => 22,
            'store_id' => 4,
        ]);

        DB::table('store_imgs')->insert([
            'file_id' => 23,
            'store_id' => 4,
        ]);


    }
}

