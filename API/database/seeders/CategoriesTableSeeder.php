<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'Alimentación',
            'parent_category_id' => null
        ]);

        DB::table('categories')->insert([
            'name' => 'Lácteos',
            'parent_category_id' => 1
        ]);

        DB::table('categories')->insert([
            'name' => 'Frutas',
            'parent_category_id' => 1
        ]);

        DB::table('categories')->insert([
            'name' => 'Salsas',
            'parent_category_id' => 1
        ]);

        DB::table('categories')->insert([
            'name' => 'Yogures',
            'parent_category_id' => 2
        ]);

        DB::table('categories')->insert([
            'name' => 'Sin bífidus',
            'parent_category_id' => 5
        ]);
    }
}
