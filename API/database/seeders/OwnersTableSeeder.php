<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class OwnersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('owners')->insert([
            'id' => 1,
            'verified' => true
        ]);
        DB::table('owners')->insert([
            'id' => 3,
            'verified' => false
        ]);
        DB::table('owners')->insert([
            'id' => 5,
            'verified' => true
        ]);
    }
}
