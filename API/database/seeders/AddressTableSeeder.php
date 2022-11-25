<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class AddressTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('address')->insert([
            'road_type' => 'calle',
            'zip_code' => '04000',
            'number' => '2',
            'name' => 'falsa',
            'town_id' => '1',
            'remarks' => 'ninguno'
        ]);
        DB::table('address')->insert([
            'road_type' => 'avenida',
            'zip_code' => '04002',
            'number' => '1',
            'name' => 'falsísima',
            'town_id' => '1',
            'remarks' => 'una avenida real'
        ]);
        DB::table('address')->insert([
            'road_type' => 'boulevard',
            'zip_code' => '04004',
            'number' => '19',
            'name' => 'súper falsa',
            'town_id' => '1',
            'remarks' => 'esta sí que existe'
        ]);
        DB::table('address')->insert([
            'road_type' => 'calle',
            'zip_code' => '04003',
            'number' => '10',
            'name' => 'de verdad',
            'town_id' => '1',
            'remarks' => 'esta igual no existe'
        ]);
        DB::table('address')->insert([
            'road_type' => 'callejón',
            'zip_code' => '04001',
            'number' => '0',
            'name' => 'real',
            'town_id' => '1',
            'remarks' => 'esta existe'
        ]);
    }
}
