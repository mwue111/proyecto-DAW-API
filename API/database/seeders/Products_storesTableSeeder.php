<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class Products_storesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('products_stores')->insert([
            'product_id' => 1,
            'store_id' => 1,
            'unit' => 'Litro',
            'stock' => 2,
            'value' => 2.49,
            'remarks' => 'El kilo de pomelo está a 2.49€'
           ]);
        DB::table('products_stores')->insert([
            'product_id' => 2,
            'store_id' => 1,
            'unit' => 'Litro',
            'stock' => 4,
            'value' => 1.8,
            'remarks' => 'El kilo de bulgur está a 1.80€'
           ]);
        DB::table('products_stores')->insert([
            'product_id' => 3,
            'store_id' => 1,
            'unit' => 'Litro',
            'stock' => 2,
            'value' => 12,
            'remarks' => 'El kilo de plátano está a 12.00€'
           ]);
        DB::table('products_stores')->insert([
            'product_id' => 4,
            'store_id' => 1,
            'unit' => 'Litro',
            'stock' => 4,
            'value' => 0.75,
            'remarks' => 'El litro de zumo de piña está a 0.75€'
           ]);
        DB::table('products_stores')->insert([
            'product_id' => 5,
            'store_id' => 1,
            'unit' => 'Litro',
            'stock' => 4,
            'value' => 20,
            'remarks' => 'El litro de brugal está a 20€'
           ]);
           DB::table('products_stores')->insert([
            'product_id' => 2,
            'store_id' => 2,
            'unit' => 'Litro',
            'stock' => 4,
            'value' => 1.8,
            'remarks' => 'El kilo de bulgur está a 1.80€'
           ]);
              DB::table('products_stores')->insert([
                'product_id' => 3,
                'store_id' => 2,
                'unit' => 'Litro',
                'stock' => 2,
                'value' => 12,
                'remarks' => 'El kilo de plátano está a 12.00€'
              ]);
                DB::table('products_stores')->insert([
                    'product_id' => 4,
                    'store_id' => 2,
                    'unit' => 'Litro',
                    'stock' => 4,
                    'value' => 0.75,
                    'remarks' => 'El litro de zumo de piña está a 0.75€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 5,
                    'store_id' => 2,
                    'unit' => 'Litro',
                    'stock' => 4,
                    'value' => 20,
                    'remarks' => 'El litro de brugal está a 20€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 1,
                    'store_id' => 3,
                    'unit' => 'Litro',
                    'stock' => 2,
                    'value' => 2.49,
                    'remarks' => 'El kilo de pomelo está a 2.49€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 4,
                    'store_id' => 3,
                    'unit' => 'Litro',
                    'stock' => 4,
                    'value' => 0.75,
                    'remarks' => 'El litro de zumo de piña está a 0.75€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 5,
                    'store_id' => 3,
                    'unit' => 'Litro',
                    'stock' => 4,
                    'value' => 20,
                    'remarks' => 'El litro de brugal está a 20€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 1,
                    'store_id' => 4,
                    'unit' => 'Litro',
                    'stock' => 2,
                    'value' => 2.49,
                    'remarks' => 'El kilo de pomelo está a 2.49€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 2,
                    'store_id' => 4,
                    'unit' => 'Litro',
                    'stock' => 4,
                    'value' => 1.8,
                    'remarks' => 'El kilo de bulgur está a 1.80€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 3,
                    'store_id' => 4,
                    'unit' => 'Litro',
                    'stock' => 2,
                    'value' => 12,
                    'remarks' => 'El kilo de plátano está a 12.00€'
                ]);
                DB::table('products_stores')->insert([
                    'product_id' => 5,
                    'store_id' => 4,
                    'unit' => 'Litro',
                    'stock' => 4,
                    'value' => 20,
                    'remarks' => 'El litro de brugal está a 20€'
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 2,
                    'store_id' => 5,
                    'unit' => 'Kilo',
                    'stock' => 4,
                    'value' => 15,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 4,
                    'store_id' => 5,
                    'unit' => 'Litro',
                    'stock' => 4,
                    'value' => 5,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 6,
                    'store_id' => 5,
                    'unit' => 'Pack',
                    'stock' => 4,
                    'value' => 3,
                    'remarks' => 'El pack de danonino cuesta 3€'
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 7,
                    'store_id' => 5,
                    'unit' => 'Pack',
                    'stock' => 4,
                    'value' => 2,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 9,
                    'store_id' => 5,
                    'unit' => 'Litro',
                    'stock' => 4,
                    'value' => 1.8,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 11,
                    'store_id' => 5,
                    'unit' => 'Kilo',
                    'stock' => 4,
                    'value' => 3,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 15,
                    'store_id' => 6,
                    'unit' => 'Kilo',
                    'stock' => 4,
                    'value' => 2,
                    'remarks' => 'El kilo de jamñon york sale a 2€'
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 16,
                    'store_id' => 6,
                    'unit' => 'Pack',
                    'stock' => 4,
                    'value' => 3,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 14,
                    'store_id' => 7,
                    'unit' => 'Kilo',
                    'stock' => 4,
                    'value' => 5,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 1,
                    'store_id' => 8,
                    'unit' => 'Kilo',
                    'stock' => 20,
                    'value' => 2,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 3,
                    'store_id' => 8,
                    'unit' => 'Kilo',
                    'stock' => 20,
                    'value' => 1.5,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 10,
                    'store_id' => 8,
                    'unit' => 'Kilo',
                    'stock' => 30,
                    'value' => 2,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 12,
                    'store_id' => 9,
                    'unit' => 'Kilo',
                    'stock' => 50,
                    'value' => 1.2,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 14,
                    'store_id' => 10,
                    'unit' => 'Kilo',
                    'stock' => 60,
                    'value' => 3,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 12,
                    'store_id' => 11,
                    'unit' => 'Kilo',
                    'stock' => 30,
                    'value' => 2,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 2,
                    'store_id' => 12,
                    'unit' => 'Litro',
                    'stock' => 10,
                    'value' => 10,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 6,
                    'store_id' => 12,
                    'unit' => 'Pack',
                    'stock' => 10,
                    'value' => 2,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 11,
                    'store_id' => 12,
                    'unit' => 'Pack',
                    'stock' => 15,
                    'value' => 5,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 1,
                    'store_id' => 13,
                    'unit' => 'Kilo',
                    'stock' => 50,
                    'value' => 2,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 15,
                    'store_id' => 14,
                    'unit' => 'Kilo',
                    'stock' => 20,
                    'value' => 3,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 14,
                    'store_id' => 15,
                    'unit' => 'Kilo',
                    'stock' => 60,
                    'value' => 1.2,
                    'remarks' => ''
                ]);

                DB::table('products_stores')->insert([
                    'product_id' => 10,
                    'store_id' => 16,
                    'unit' => 'Kilo',
                    'stock' => 15,
                    'value' => 5,
                    'remarks' => ''
                ]);

                //inserta 30 productos aleatorios de los existentes en cada tienda, con unit stock y value aleatorios
                // $unidad = ['unidad', 'kilo', 'litro', 'docena', 'pack de 6', 'pack de 8', 'pack de 12'];
                // for ($i = 1; $i <= 500; $i++) {
                //         $precio = rand(1, 100);
                //         try {
                //             DB::table('products_stores')->insert([
                //                 'product_id' => rand(1, 80),
                //                 'store_id' => rand(1, 40),
                //                 'unit' => $unidad[rand(0, 6)],
                //                 'stock' => rand(1, 1000),
                //                 'value' => $precio,
                //                 'remarks' => 'El producto está a ' . $precio . '€'
                //             ]);
                //         } catch (\Throwable $th) {
                //         }
                // }
    }
}
