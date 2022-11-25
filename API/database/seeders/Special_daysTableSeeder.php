<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Special_daysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('special_days')->insert([
             'name' => 'Año Nuevo',
             'date' => '2022-01-01',
             'remarks' => 'Año Nuevo',
        ]);
        DB::table('special_days')->insert([
             'name' => 'Día de Reyes',
             'date' => '2022-01-06',
             'remarks' => 'Día de Reyes',
        ]);
        DB::table('special_days')->insert([
             'name' => 'Día de la Constitución',
             'date' => '2022-02-05',
             'remarks' => 'Día de la Constitución',
        ]);
        DB::table('special_days')->insert([
             'name' => 'Día de la Inmaculada Concepción',
             'date' => '2022-12-08',
             'remarks' => 'Día de la Inmaculada Concepción',
        ]);
        DB::table('special_days')->insert([
             'name' => 'Navidad',
             'date' => '2022-12-25',
             'remarks' => 'Navidad',
        ]);
    }
}
