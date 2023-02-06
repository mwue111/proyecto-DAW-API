<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class StoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stores')->insert([
            'name' => 'Fruteria de María',
            'address_id' => 1,
            'email' => 'frutamaria@msn.com',
            'telephone1' => '950222222',
            'telephone2' => '647895325',
            'longitude' => 41.40338,
            'latitude' => 2.17403,
            'description' => 'Fruteria de María, la mejor fruteria de la ciudad',
            'user_id' => 4,
            'deleted' => 1,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'Anka la Encarna',
            'address_id' => 2,
            'email' => 'ankalaencarna@hotmail.com',
            'telephone1' => '950984509',
            'telephone2' => '612654789',
            'longitude' => 41.40338,
            'latitude' => 2.17403,
            'description' => 'Anka la Encarna, la mejor tienda de alimentación de la ciudad',
            'user_id' => 4,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'El verdulero',
            'address_id' => 3,
            'email' => 'juanverdulero@msn.com',
            'telephone1' => '950192837',
            'telephone2' => '647564738',
            'longitude' => 41.40338,
            'latitude' => 2.17403,
            'description' => 'El verdulero, la mejor tienda de verduras de la ciudad',
            'user_id' => 4,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'El bazar del alimento',
            'address_id' => 4,
            'email' => 'bazardelalimento@gmail.com',
            'telephone1' => '950839265',
            'telephone2' => '643091287',
            'longitude' => 41.40338,
            'latitude' => 2.17403,
            'description' => 'El bazar del alimento, la mejor tienda de alimentación de la ciudad',
            'user_id' => 4,
            'deleted' => 1,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2018-01-01 00:00:00',
        ]);
    }
}
