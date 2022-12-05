<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'name' => 'Pomelo',
            'description' => 'En un pomelo de tan solo 200 gramos puede encontrarse 278 miligramos de potasio, que es vital para la salud del corazón. Por esta causa, algunos médicos han recomendado el pomelo para reducir la presión arterial',
            'brand_id' => 1,
        ]);

        DB::table('products')->insert([
            'name' => 'Bulgur',
            'description' => 'Alimento elaborado a partir del trigo',
            'brand_id' => 2,
        ]);

        DB::table('products')->insert([
            'name' => 'Plátanos',
            'description' => 'Fruta con alto contenido en potasio',
            'brand_id' => 1,
        ]);

        DB::table('products')->insert([
            'name' => 'Zumo de piña',
            'description' => 'Pack de seis zumos de piña',
            'brand_id' => 4,
        ]);

        DB::table('products')->insert([
            'name' => 'Brugal',
            'description' => 'Ron de la República Dominicana.',
            'brand_id' => 3,
        ]);
    }
}
