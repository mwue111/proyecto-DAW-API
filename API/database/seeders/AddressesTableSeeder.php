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
        //6
        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04000',
            'number' => '8',
            'name' => 'Hermanos Pinzón',
            'town_id' => '1',
            'remarks' => ''
        ]);

        DB::table('addresses')->insert([
            'road_type' => 'Avenida',
            'zip_code' => '04001',
            'number' => '20',
            'name' => 'Pablo Iglesias',
            'town_id' => '1',
            'remarks' => ''
        ]);

        DB::table('addresses')->insert([
            'road_type' => 'Paseo',
            'zip_code' => '04008',
            'number' => '1',
            'name' => 'Almería',
            'town_id' => '1',
            'remarks' => ''
        ]);

        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04001',
            'number' => '1',
            'name' => 'Machado',
            'town_id' => '2',
            'remarks' => ''
        ]);

        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04010',
            'number' => '10',
            'name' => 'Juan de la Cruz',
            'town_id' => '1',
            'remarks' => ''
        ]);

        DB::table('addresses')->insert([
            'road_type' => 'Avenida',
            'zip_code' => '04013',
            'number' => '3',
            'name' => 'de la Estación',
            'town_id' => '1',
            'remarks' => ''
        ]);

        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04001',
            'number' => '5',
            'name' => 'San Juan Bosco',
            'town_id' => '1',
            'remarks' => ''
        ]);

        DB::table('addresses')->insert([
            'road_type' => 'Boulevard',
            'zip_code' => '04005',
            'number' => '3',
            'name' => 'Gustavo Villapalos',
            'town_id' => '1',
            'remarks' => ''
        ]);

        DB::table('addresses')->insert([
            'road_type' => 'Carretera',
            'zip_code' => '04023',
            'number' => '8',
            'name' => 'Níjar',
            'town_id' => '3',
            'remarks' => ''
        ]);

        DB::table('addresses')->insert([
            'road_type' => 'Calle',
            'zip_code' => '04024',
            'number' => '1',
            'name' => 'Guillermo Reina',
            'town_id' => '2',
            'remarks' => ''
        ]);

        DB::table('addresses')->insert([
            'road_type' => 'Avenida',
            'zip_code' => '04005',
            'number' => '3',
            'name' => 'Zaplana',
            'town_id' => '3',
            'remarks' => ''
        ]);
    }
}
