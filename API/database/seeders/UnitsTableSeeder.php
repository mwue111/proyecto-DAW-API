<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class UnitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('units')->insert([
            'name' => 'Kg',
        ]);
        DB::table('units')->insert([
            'name' => 'L',
        ]);
        DB::table('units')->insert([
            'name' => 'Unidad',
        ]);
        DB::table('units')->insert([
            'name' => 'Docena',
        ]);
    }
}
