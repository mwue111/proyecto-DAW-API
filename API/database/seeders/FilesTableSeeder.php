<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class FilesTableSeeder extends Seeder
{
    public function run(){
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lavanguardia.com%2Fpeliculas-series%2Fpersonas%2Fjackie-chan-18897&psig=AOvVaw0OI4IrGDTAyh5XpTegYo2H&ust=1668861184754000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMCz4cbet_sCFQAAAAAdAAAAABAD',
            'image_type' => 'profile_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 1,
            'url' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rtve.es%2Fnoticias%2F20200110%2Fperfil-alberto-garzon-ministro-consumo%2F1995051.shtml&psig=AOvVaw3RA8HcpaIhUTzsMw5K5zoV&ust=1668861381136000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKCAqqDft_sCFQAAAAAdAAAAABAH',
            'image_type' => 'profile_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://latiendadejackiechan.com/foto',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);
        //4 - CASI
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://www.casi.es/wp-content/uploads/2020/10/logo-casi.png',
            'image_type' => 'brand_imgs',
        ]);
        //5 - Juver
        DB::table('files')->insert([
            'user_id' => 1,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrX-Oltl3WC7R8nVbg2Y6C_q9qKV1SNMA8Iw&usqp=CAU',
            'image_type' => 'brand_imgs',
        ]);
        //6 - Danone
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mk7_fRXehIRjLk_gEhSIOJRmfMl_URU4SA&usqp=CAU',
            'image_type' => 'brand_imgs',
        ]);
        //7 - Coca-Cola
        DB::table('files')->insert([
            'user_id' => 1,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVRUbGWo7hCi_4gs4usJBjeVZW_sobM3Prw&usqp=CAU',
            'image_type' => 'brand_imgs',
        ]);
        //8
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/640px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //9
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2021-04/pomelo.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //10
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://actualfruveg.com/wp-content/uploads/2022/02/bea-pomelo-c-e1646326027737.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //11
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://images.ecestaticos.com/NQnGXX3dmMx3xZ9nKoxfFQNvTOQ=/75x40:1910x1411/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F703%2Fbce%2F642%2F703bce6420de19f2078f6a62c005bcf0.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //12
        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://linverd.com/es/wp-content/uploads/sites/3/2021/02/bulgur-600x334.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //13
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsmGb1HWNfSYvpkPoufD2jXtf7qM8ykJHbQGZ1iLjheo0HkMYmpj4IJEQi2lNvkCHlog&usqp=CAU',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //14
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://www.frutoseco.com/1534-large_default/bulgur-500g.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //15
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://static2.abc.es/media/bienestar/2019/07/25/platano-beneficios-kIyF--1200x630@abc.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //16
        DB::table('files')->insert([
            'user_id' => 1,
            'url' => 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/platanos_0.jpg.webp?itok=Nm5QVrwg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //17
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://www.ayuno.es/wp-content/uploads/2017/12/Zumo-de-pin%CC%83a.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //18
        DB::table('files')->insert([
            'user_id' => 1,
            'url' => 'https://www.consalud.es/estetic/uploads/s1/12/82/63/zumo_pina_beneficios_11052017_consalud.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //19
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://marianomadrueno.es/wp-content/uploads/2019/08/brugal-anejo-ron-nueva-edicion-botella-70-cl-2021.png',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //20
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://cdn.shopify.com/s/files/1/0359/6350/2725/products/006584-helado-de-Danonino-MPK-la-menorquina-en-casa_600x.jpg?v=1652865141',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //21
        DB::table('files')->insert([
            'user_id' => 1,
            'url' => 'https://static.ulabox.com/media/178794_l1.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4gVVQ_9jykaZDboR0p99fD_BBz-JlToXWXK8CKBGhFRo8q0KzhjhQ-DzXbvnyLQtEHc&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5B99UoHJbE0bdUrG6vETs7_-9YN-Ign4CFweF3omOn3GD1mdotvvKEqBUTG1PJfs8s0&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2yQngMwS7voRqh2f7DDZN2zUcZ6v823ZLiDLHlkzgFjoZUlv-b1HarViwdOFYSrUoGA&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxSttjehGqhC2Gn3wimfc2KUmmdmWj83IGf09V5idCn_zlEJuXMBrfWxJz7n1uRFL3GE&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczO7HiD8NmXErZgcFgUKdf-N5YOXekBhFoLg4rJM8g0LbH7rTRlz2MgURH_Qeyp_7DfY&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirl35AubSkQn-WsWRreuNPCjkIo9Q8pdR3DI_FzPkmDkRKqpMgWm7esNHtC0MQPdZ-X8&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://delahuertacasa.com/wp-content/uploads/2022/01/tomate-pera-product.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://www.elhuertourbano.net/wp-content/uploads/tomate-del-tipo-pera.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/616sz7TSGnS._AC_SX522_.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://supercostablanca.es/3729-large_default/asturiana-leche-entera-1l.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://img.interempresas.net/fotos/1341264.jpeg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://img.interempresas.net/fotos/1341264.jpeg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202206/29/00120641600968____4__600x600.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://s.cdnmpro.com/321239485/p/l/7/cereales-all-bran~387.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://frujuaida.com/wp-content/uploads/2022/05/03125-1.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://frujuaida.com/wp-content/uploads/2022/05/00084-1.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://canalcocina.es/medias/_cache/zoom-461372ac05133b4210522ae187d2cf50-920-518.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://legumbreslosrecuencos.com/wp-content/uploads/2021/12/Lentejas-Pardinas-Bolsa.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://www.lavozdeltajo.com/fotos/49/atun.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/02/congelar-latas-de-atun-anna1311.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://www.codionline.es/documents/10180/10526/34668_G.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://hortadeleixample.es/86-large_default/huevos-ecologicos.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://productosgourmet.online/blog/wp-content/uploads/2020/05/por-que-comprar-huevos-ecologicos-5-1024x1024.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://resigras.es/wp-content/uploads/2018/10/iStock-528742647-1170x781.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxojPX_WlIQ66ks8GwfWwt8ypWqisQSvv3xJRFf51GLaBq57qK4wo1O3sK2WnUS938s88&usqp=CAU',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/18/00120930500341____2__600x600.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202002/05/00120930500044____2__600x600.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

    }
}
