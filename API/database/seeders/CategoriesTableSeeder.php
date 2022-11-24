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
        DB::table('products')->insert([
            'name' => 'Alimentación',
            'parent_category_id' => 1,
        ]);

        DB::table('products')->insert([
            'name' => 'Lácteos',
            'parent_category_id' => 1,
        ]);

        DB::table('products')->insert([
            'name' => 'Frutas',
            'parent_category_id' => 1,
        ]);

        DB::table('products')->insert([
            'name' => 'Salsas',
            'parent_category_id' => 1,
        ]);
    }
}
