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
            'category_id' => 3,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Bulgur',
            'description' => 'Alimento elaborado a partir del trigo',
            'brand_id' => 2,
            'category_id' => 1,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Plátanos',
            'description' => 'Fruta con alto contenido en potasio',
            'brand_id' => 1,
            'category_id' => 3,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Zumo de piña',
            'description' => 'Pack de seis zumos de piña que lleva sin actualizar tres meses',
            'brand_id' => 4,
            'category_id' => 3,
            'deleted' => 1,
            'updated_at' => '2022-12-16 00:00:00',
        ]);

        DB::table('products')->insert([
            'name' => 'Brugal',
            'description' => 'Ron de la República Dominicana que lleva sin actualizar más de un año.',
            'brand_id' => 4,
            'category_id' => 2,
            'deleted' => 1,
            'updated_at' => '2021-01-01 00:00:00',
        ]);

        DB::table('products')->insert([
            'name' => 'Polo de fresa',
            'description' => 'Polos de yogurt sabor a fresa.',
            'brand_id' => 3,
            'category_id' => 6,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Danonino de fresa',
            'description' => 'Danonino fake que no contiene bífidus',
            'brand_id' => 3,
            'category_id' => 6,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Tomate pera',
            'description' => 'Tomate carnoso, dulce, sabroso y con una piel muy fina',
            'brand_id' => 1,
            'category_id' => 3,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Leche entera',
            'description' => 'Leche procedente de animales con bienestar garantizado',
            'brand_id' => 6,
            'category_id' => 2,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Fresa',
            'description' => 'Las fresas son ricas en fibra, antioxidantes, vitaminas y minerales, lo que ayuda a mantener un intestino saludable.',
            'brand_id' => 1,
            'category_id' => 3,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'All-Bran',
            'description' => 'cereales de trigo integral y combinacion de fruta como uvas pasas, manzana, plátano, coco y avellana.',
            'brand_id' => 8,
            'category_id' => 4,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Patatas',
            'description' => 'Fuente de hierro, zinc y cobre.',
            'brand_id' => 1,
            'category_id' => 5,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Lentejas',
            'description' => 'Las lentejas son ricas en proteínas, minerales, vitaminas y fibra.',
            'brand_id' => 1,
            'category_id' => 6,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Atún',
            'description' => 'El atún es rico en ácidos grasos Omega3.',
            'brand_id' => 5,
            'category_id' => 7,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Jamón york',
            'description' => 'Fiambre derivado de la carne de cerdo.',
            'brand_id' => 5,
            'category_id' => 8,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Huevos ecológicos',
            'description' => 'Procedentes de gallinas que viven en corrales al aire libre.',
            'brand_id' => 6,
            'category_id' => 9,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Aceite de oliva',
            'description' => 'Aceite vegetal de uso principalmente culinario. Se obtiene del fruto del olivo (Olea europaea), denominado oliva o aceituna.',
            'brand_id' => 1,
            'category_id' => 10,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Margarina',
            'description' => 'Mezcla de aceites compuestos mayoritariamente por grasas insaturadas.',
            'brand_id' => 6,
            'category_id' => 11,
            'deleted' => 0,
        ]);

        DB::table('products')->insert([
            'name' => 'Azúcar blanco',
            'description' => 'Mezcla de aceites compuestos mayoritariamente por grasas insaturadas.',
            'brand_id' => 11,
            'category_id' => 12,
            'deleted' => 0,
        ]);

        // crea 40 seeds de productos de alimentación y 40 de bebidas
/*
for ($i = 0; $i < 40; $i++) {
    DB::table('products')->insert([
        'name' => 'Producto de alimentación ' . $i,
        'description' => 'Producto de alimentación ' . $i,
        'brand_id' => 1,
        'category_id' => 1,
        'deleted' => 0,
    ]);
}

for ($i = 0; $i < 40; $i++) {
    DB::table('products')->insert([
        'name' => 'Producto de bebida ' . $i,
        'description' => 'Producto de bebida ' . $i,
        'brand_id' => 1,
        'category_id' => 2,
        'deleted' => 0,
    ]);
}
*/
    }
}
