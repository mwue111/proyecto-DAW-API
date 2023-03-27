<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class BrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('brands')->insert([
            'name' => 'CASI',
            'description' => 'Cooperativa Agrícola San Isidro',
        ]);
        DB::table('brands')->insert([
            'name' => 'Juver',
            'description' => 'Compañía líder en los zumos de frutas y verduras',
        ]);
        DB::table('brands')->insert([
            'name' => 'Danone',
            'description' => 'Lácteos de la mejor calidad',
        ]);
        DB::table('brands')->insert([
            'name' => 'Cocacola',
            'description' => 'Bebidas refrescantes',
        ]);
        DB::table('brands')->insert([
            'name' => 'El Pozo',
            'description' => 'Embutidos',
        ]);
        DB::table('brands')->insert([
            'name' => 'Asturiana',
            'description' => 'Lácteos de calidad',
        ]);
        DB::table('brands')->insert([
            'name' => 'Campofrío',
            'description' => 'Embutidos',
        ]);
        DB::table('brands')->insert([
            'name' => 'Kellogs',
            'description' => 'Cereales de calidad',
        ]);
        DB::table('brands')->insert([
            'name' => 'Don Simón',
            'description' => 'Zumos naturales',
        ]);
        DB::table('brands')->insert([
            'name' => 'Gallina Blanca',
            'description' => 'Caldos caseros',
        ]);
        DB::table('brands')->insert([
            'name' => 'Azucarera',
            'description' => 'Azúcar de distintos tipos',
        ]);
    }
}
