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
        ]);
                   
        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G323.shtml',
            'type' => 'document',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://latiendadejackiechan.com/foto',
            'type' => 'store_imgs',
            'deleted' => 0,
        ]);
        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'https://latiendadejackiechan.com/foto',
            'type' => 'store_imgs',
            'deleted' => 0,
        ]);
        DB::table('files')->insert([
            'user_id' => 4,
            'url' => 'logotipo de una marca',
            'type' => 'brand_imgs',

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'foto de un pomelo',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'foto de bulgur',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'foto de plátanos',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'foto de un pack de zumos de piña',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'foto de una botella de ron',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 5,
            'url' => 'foto de un danonino fake',
            'type' => 'product_imgs',
            'deleted' => 0,
        ]);
    }
}
