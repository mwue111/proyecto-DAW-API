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
            'name' => 'Diabéticos',
            'description' => 'Productos para diabéticos',
        ]);
    }
}
