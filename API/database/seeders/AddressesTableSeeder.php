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
            'zip_code' => '04004',
            'number' => '15',
            'name' => 'José Artés de Arcos',
            'town_id' => '1',
            'remarks' => 'ninguno'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Avenida',
            'zip_code' => '04005',
            'number' => '12',
            'name' => 'de la Estación',
            'town_id' => '1',
            'remarks' => 'una avenida real'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04002',
            'number' => '16',
            'name' => 'Pedro Jover',
            'town_id' => '1',
            'remarks' => 'esta sí que existe'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04004',
            'number' => '15',
            'name' => 'Javier Sanz',
            'town_id' => '1',
            'remarks' => 'el celia'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04008',
            'number' => '58',
            'name' => 'Belén',
            'town_id' => '1',
            'remarks' => 'esta existe'
        ]);
    }
}
