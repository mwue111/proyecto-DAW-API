<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class addressesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04000',
            'number' => '2',
            'name' => 'Falsa',
            'town_id' => '3',
            'remarks' => 'ninguno'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Avenida',
            'zip_code' => '04002',
            'number' => '1',
            'name' => 'Falsísima',
            'town_id' => '2',
            'remarks' => 'una avenida real'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Boulevard',
            'zip_code' => '04004',
            'number' => '19',
            'name' => 'Súper Falsa',
            'town_id' => '1',
            'remarks' => 'esta sí que existe'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04003',
            'number' => '10',
            'name' => 'De Verdad',
            'town_id' => '1',
            'remarks' => 'esta igual no existe'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Callejón',
            'zip_code' => '04001',
            'number' => '0',
            'name' => 'Real',
            'town_id' => '1',
            'remarks' => 'esta existe'
        ]);
    }
}
