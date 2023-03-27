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
            'name' => 'Cereales',
            'parent_category_id' => 1
        ]);

        DB::table('categories')->insert([
            'name' => 'Tubérculos',
            'parent_category_id' => 2
        ]);

        DB::table('categories')->insert([
            'name' => 'Leguminosas',
            'parent_category_id' => 5
        ]);

        DB::table('categories')->insert([
            'name' => 'Lácteos',
            'parent_category_id' => 5
        ]);

        DB::table('categories')->insert([
            'name' => 'Pescados',
            'parent_category_id' => 5
        ]);

        DB::table('categories')->insert([
            'name' => 'Carnes',
            'parent_category_id' => 5
        ]);

        DB::table('categories')->insert([
            'name' => 'Huevos',
            'parent_category_id' => 5
        ]);

        DB::table('categories')->insert([
            'name' => 'Aceites',
            'parent_category_id' => 5
        ]);

        DB::table('categories')->insert([
            'name' => 'Grasas',
            'parent_category_id' => 5
        ]);

        DB::table('categories')->insert([
            'name' => 'Azúcar',
            'parent_category_id' => 5
        ]);
    }
}
