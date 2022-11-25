<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
            'description' => 'COmpañía líder en los zumos de frutas y verduras',
        ]);
        DB::table('brands')->insert([
            'name' => 'Danone',
            'description' => 'Lácteos de la mejor calidad',
        ]);
    }
}
