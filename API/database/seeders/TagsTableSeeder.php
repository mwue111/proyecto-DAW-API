<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tags')->insert([
            'name' => 'Sin gluten',
            'description' => 'Productos para celiacos',
        ]);

        DB::table('tags')->insert([
            'name' => 'Vegano',
            'description' => 'Productos para veganos',
        ]);

        DB::table('tags')->insert([
            'name' => 'Sin lactosa',
            'description' => 'Productos para intolerantes a la lactosa',
        ]);

        DB::table('tags')->insert([
            'name' => 'Sin azúcar',
            'description' => 'Productos para diabéticos',
        ]);

        DB::table('tags')->insert([
            'name' => 'Ecológico',
            'description' => 'Productos ecológico',
        ]);

        DB::table('tags')->insert([
            'name' => 'Sin aditivos',
            'description' => 'Productos sin aditivos',
        ]);

        DB::table('tags')->insert([
            'name' => 'Sin conservantes',
            'description' => 'Productos sin conservantes',
        ]);

        DB::table('tags')->insert([
            'name' => 'Sin colorantes',
            'description' => 'Productos sin colorantes',
        ]);

        DB::table('tags')->insert([
            'name' => 'Cultivo sostenible',
            'description' => 'Productos de sultivo sostenible',
        ]);

        DB::table('tags')->insert([
            'name' => 'Origen local',
            'description' => 'Productos de origen local',
        ]);
    }
}
