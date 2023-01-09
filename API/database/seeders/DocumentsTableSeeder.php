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
          'file_id' => 6,
          'expiration_date' => '2036-09-18'
       ]);
    }
}
