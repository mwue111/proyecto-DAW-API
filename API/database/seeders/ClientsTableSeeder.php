<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class ClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clients')->insert([
            'id' => 1
        ]);
        DB::table('clients')->insert([
            'id' => 2
        ]);
        DB::table('clients')->insert([
            'id' => 3
        ]);
        DB::table('clients')->insert([
            'id' => 4
        ]);
        DB::table('clients')->insert([
            'id' => 5
        ]);
    }
}
