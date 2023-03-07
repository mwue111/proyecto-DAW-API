<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class FilesTableSeeder extends Seeder
{
    public function run(){
        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lavanguardia.com%2Fpeliculas-series%2Fpersonas%2Fjackie-chan-18897&psig=AOvVaw0OI4IrGDTAyh5XpTegYo2H&ust=1668861184754000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMCz4cbet_sCFQAAAAAdAAAAABAD',
            'type' => 'profile_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 4,
            'url' => 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1463207464959160321%2Fgqm3QEfP_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Firenemontero&tbnid=mqekORLnTJth4M&vet=12ahUKEwj0nqSV37f7AhUUgHMKHU5sAF0QMygBegUIARDlAQ..i&docid=HudMX-rjaonT0M&w=399&h=399&q=irene%20montero&safe=active&ved=2ahUKEwj0nqSV37f7AhUUgHMKHU5sAF0QMygBegUIARDlAQ',
            'type' => 'profile_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rtve.es%2Fnoticias%2F20200110%2Fperfil-alberto-garzon-ministro-consumo%2F1995051.shtml&psig=AOvVaw3RA8HcpaIhUTzsMw5K5zoV&ust=1668861381136000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKCAqqDft_sCFQAAAAAdAAAAABAH',
            'type' => 'profile_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 1,
            'url' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvalenciaplaza.com%2Fmazinger-z-el-robot-de-los-punos-de-oro&psig=AOvVaw2dm-M5qynEQoccMGwafyeS&ust=1668861405319000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjl5Kzft_sCFQAAAAAdAAAAABAI',
            'type' => 'profile_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elle.com%2Fculture%2Fmovies-tv%2Fa24276316%2Fseina-shimabukuro-terrace-house%2F&psig=AOvVaw0LqFdEMFityrR5xMsdbNpM&ust=1668861448905000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCODct8Lft_sCFQAAAAAdAAAAABAD',
            'type' => 'profile_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G323.shtml',
            'type' => 'document',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBVVLm7D_0fFS7UBro9-2sbGN5VAFnWA8ZdUAr9D82WSe4Gzq5ZdWVWFPtoPhW7VQXwY&usqp=CAU',
            'type' => 'store_imgs',
            'deleted' => 0,
        ]);
        DB::table('files')->insert([
            'user_id' => 4,
            'url' => 'https://latiendadejackiechan.com/foto',
            'type' => 'store_imgs',
            'deleted' => 0,
        ]);
        //9 - CASI
        DB::table('files')->insert([
            'user_id' => 4,
            'url' => 'https://www.casi.es/wp-content/uploads/2020/10/logo-casi.png',
            'type' => 'brand_imgs',
        ]);
        //10 - Juver
        DB::table('files')->insert([
            'user_id' => 4,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrX-Oltl3WC7R8nVbg2Y6C_q9qKV1SNMA8Iw&usqp=CAU',
            'type' => 'brand_imgs',
        ]);
        //11 - Danone
        DB::table('files')->insert([
            'user_id' => 4,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mk7_fRXehIRjLk_gEhSIOJRmfMl_URU4SA&usqp=CAU',
            'type' => 'brand_imgs',
        ]);
        //12 - Coca-Cola
        DB::table('files')->insert([
            'user_id' => 4,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVRUbGWo7hCi_4gs4usJBjeVZW_sobM3Prw&usqp=CAU',
            'type' => 'brand_imgs',
        ]);
        //13
        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/640px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //14
        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2021-04/pomelo.jpg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //15
        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://actualfruveg.com/wp-content/uploads/2022/02/bea-pomelo-c-e1646326027737.jpg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);
        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://images.ecestaticos.com/NQnGXX3dmMx3xZ9nKoxfFQNvTOQ=/75x40:1910x1411/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F703%2Fbce%2F642%2F703bce6420de19f2078f6a62c005bcf0.jpg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://linverd.com/es/wp-content/uploads/sites/3/2021/02/bulgur-600x334.jpg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsmGb1HWNfSYvpkPoufD2jXtf7qM8ykJHbQGZ1iLjheo0HkMYmpj4IJEQi2lNvkCHlog&usqp=CAU',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://www.frutoseco.com/1534-large_default/bulgur-500g.jpg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //20
        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://static2.abc.es/media/bienestar/2019/07/25/platano-beneficios-kIyF--1200x630@abc.jpg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //21
        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/platanos_0.jpg.webp?itok=Nm5QVrwg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //22
        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://www.ayuno.es/wp-content/uploads/2017/12/Zumo-de-pin%CC%83a.jpg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //23
        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://www.consalud.es/estetic/uploads/s1/12/82/63/zumo_pina_beneficios_11052017_consalud.jpg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://marianomadrueno.es/wp-content/uploads/2019/08/brugal-anejo-ron-nueva-edicion-botella-70-cl-2021.png',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //25
        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://cdn.shopify.com/s/files/1/0359/6350/2725/products/006584-helado-de-Danonino-MPK-la-menorquina-en-casa_600x.jpg?v=1652865141',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 7,
            'url' => 'https://static.ulabox.com/media/178794_l1.jpg',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4gVVQ_9jykaZDboR0p99fD_BBz-JlToXWXK8CKBGhFRo8q0KzhjhQ-DzXbvnyLQtEHc&usqp=CAU',
            'type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5B99UoHJbE0bdUrG6vETs7_-9YN-Ign4CFweF3omOn3GD1mdotvvKEqBUTG1PJfs8s0&usqp=CAU',
            'type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2yQngMwS7voRqh2f7DDZN2zUcZ6v823ZLiDLHlkzgFjoZUlv-b1HarViwdOFYSrUoGA&usqp=CAU',
            'type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxSttjehGqhC2Gn3wimfc2KUmmdmWj83IGf09V5idCn_zlEJuXMBrfWxJz7n1uRFL3GE&usqp=CAU',
            'type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczO7HiD8NmXErZgcFgUKdf-N5YOXekBhFoLg4rJM8g0LbH7rTRlz2MgURH_Qeyp_7DfY&usqp=CAU',
            'type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 4,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirl35AubSkQn-WsWRreuNPCjkIo9Q8pdR3DI_FzPkmDkRKqpMgWm7esNHtC0MQPdZ-X8&usqp=CAU',
            'type' => 'store_imgs',
            'deleted' => 0,
        ]);
    }
}
