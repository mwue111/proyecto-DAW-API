<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class AddressesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04004',
            'number' => '15',
            'name' => 'Javier Sanz',
            'town_id' => '1',
            'remarks' => 'celia'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Avenida',
            'zip_code' => '04005',
            'number' => '12',
            'name' => 'de la estación',
            'town_id' => '1',
            'remarks' => 'Ocio'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04008',
            'number' => '58',
            'name' => 'Belén',
            'town_id' => '1',
            'remarks' => 'lidl'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04004',
            'number' => '15',
            'name' => 'José Artés de Arcos',
            'town_id' => '1',
            'remarks' => 'Herbolario'
        ]);
        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04738',
            'number' => '19',
            'name' => 'Vera',
            'town_id' => '1',
            'remarks' => 'Vícar'
        ]);
    }
}
