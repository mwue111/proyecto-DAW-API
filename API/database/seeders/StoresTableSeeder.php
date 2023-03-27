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
            'user_id' => 3,
            'deleted' => 1,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2023-01-01 00:00:00',
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
            'user_id' => 3,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2022-11-01 00:00:00',
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
            'user_id' => 3,
            'deleted' => 1,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-07-08 00:00:00',
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
            'user_id' => 3,
            'deleted' => 1,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2018-01-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'La tienda de la esquina',
            'address_id' => 5,
            'email' => 'laesquina@mailto.com',
            'telephone1' => '950123456',
            'telephone2' => '647987654',
            'longitude' => 41.40338,
            'latitude' => 2.17403,
            'description' => 'La tienda de la esquina, la mejor tienda de alimentación de la ciudad',
            'user_id' => 3,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        //8
        DB::table('stores')->insert([
            'name' => 'Carnicería López',
            'address_id' => 6,
            'email' => 'tucarnieria@mailto.com',
            'telephone1' => '950111111',
            'telephone2' => '647987896',
            'longitude' => 41.40333,
            'latitude' => 2.17401,
            'description' => 'Carnicería de confianza y de toda la vida',
            'user_id' => 3,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        //9
        DB::table('stores')->insert([
            'name' => 'Pescadería Joaquín',
            'address_id' => 7,
            'email' => 'pescados_joaquin@mailto.com',
            'telephone1' => '950123789',
            'telephone2' => '647981253',
            'longitude' => 41.40332,
            'latitude' => 2.17404,
            'description' => 'Pescado fresco y de calidad',
            'user_id' => 3,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        //10
        DB::table('stores')->insert([
            'name' => 'Frutería Anita',
            'address_id' => 8,
            'email' => 'anitafrutas@mailto.com',
            'telephone1' => '950123412',
            'telephone2' => '647989853',
            'longitude' => 41.40335,
            'latitude' => 2.17406,
            'description' => 'Frutas y verduras de la huerta',
            'user_id' => 3,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'Verdulería Estrella',
            'address_id' => 9,
            'email' => 'frutasestrella@msn.com',
            'telephone1' => '950222224',
            'telephone2' => '647895986',
            'longitude' => 41.40390,
            'latitude' => 2.17467,
            'description' => 'Fruteria Estrella, la mejor frutería de la ciudad',
            'user_id' => 3,
            'deleted' => 1,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2023-01-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'Marina pescaderías',
            'address_id' => 10,
            'email' => 'pescadofresco@hotmail.com',
            'telephone1' => '950984585',
            'telephone2' => '612654123',
            'longitude' => 41.40387,
            'latitude' => 2.17423,
            'description' => 'De la lonja a tu mesa',
            'user_id' => 3,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2022-11-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'Verduleras frescas',
            'address_id' => 11,
            'email' => 'misverduras@msn.com',
            'telephone1' => '950139837',
            'telephone2' => '647519738',
            'longitude' => 41.40342,
            'latitude' => 2.17407,
            'description' => 'Verduras frescas y sanas',
            'user_id' => 3,
            'deleted' => 1,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-07-08 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'Todo alimentos',
            'address_id' => 12,
            'email' => 'alimentos@gmail.com',
            'telephone1' => '951039265',
            'telephone2' => '640191287',
            'longitude' => 41.40238,
            'latitude' => 2.17406,
            'description' => 'Todo lo que necesitas para comer bien y barato',
            'user_id' => 3,
            'deleted' => 1,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2018-01-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'Frutería mis vecinas',
            'address_id' => 13,
            'email' => 'vecinas@mailto.com',
            'telephone1' => '956123456',
            'telephone2' => '609987654',
            'longitude' => 41.43338,
            'latitude' => 2.17423,
            'description' => 'Futería de toda la vida',
            'user_id' => 3,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'Carnicería Marcos',
            'address_id' => 14,
            'email' => 'todocarne@mailto.com',
            'telephone1' => '950156111',
            'telephone2' => '647991896',
            'longitude' => 41.40352,
            'latitude' => 2.17741,
            'description' => 'Carnes ecológicas y saludables',
            'user_id' => 3,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'Pescadería Bonito',
            'address_id' => 15,
            'email' => 'mejorpescado@mailto.com',
            'telephone1' => '950121889',
            'telephone2' => '647981053',
            'longitude' => 41.40347,
            'latitude' => 2.17284,
            'description' => 'El pescado más fresco de la ciudad',
            'user_id' => 3,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        DB::table('stores')->insert([
            'name' => 'Frutería Asensio',
            'address_id' => 16,
            'email' => 'frutasensio@mailto.com',
            'telephone1' => '950193412',
            'telephone2' => '647919853',
            'longitude' => 41.40185,
            'latitude' => 2.17176,
            'description' => 'Toda la fruta que necesitas',
            'user_id' => 3,
            'deleted' => 0,
            'created_at' => '2021-01-01 00:00:00',
            'updated_at' => '2021-01-01 00:00:00',
        ]);
/*
        for ($i = 0; $i < 40; $i++) {
            DB::table('stores')->insert([
                'name' => 'Tienda ' . $i,
                'address_id' => 5,
                'email' => 'tienda' . $i . '@gmail.com',
                'telephone1' => '950123456',
                'telephone2' => '647987654',
                'longitude' => 41.40338,
                'latitude' => 2.17403,
                'description' => 'Tienda ' . $i . ', la mejor tienda de alimentación de la ciudad',
                'user_id' => 4,
                'deleted' => 0,
                'created_at' => '2021-01-01 00:00:00',
                'updated_at' => '2021-01-01 00:00:00',
            ]);
        }*/
    }
}
