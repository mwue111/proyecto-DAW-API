<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class DocumentsTableSeeder extends Seeder
{
    public function run()
    {
       DB::table('documents')->insert([
            'expiration_date' => '2052-11-24'
       ]);
       DB::table('documents')->insert([
            'expiration_date' => '2040-01-05'
       ]);
       DB::table('documents')->insert([
            'expiration_date' => '2025-01-15'
       ]);
       DB::table('documents')->insert([
            'expiration_date' => '2030-05-01'
       ]);
       DB::table('documents')->insert([
            'expiration_date' => '2036-09-18'
       ]);
    }
}
