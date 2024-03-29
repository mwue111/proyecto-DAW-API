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
            'user_id' => 3,
            'verified' => 0,
            'deleted' => 0,
        ]);

        DB::table('owners')->insert([
            'user_id' => 4,
            'verified' => 1,
            'deleted' => 0,
        ]);
    }
}
