<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class ImagesTableSeeder extends Seeder{
    public function run(){
       DB::table('images')->insert([
        'url' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lavanguardia.com%2Fpeliculas-series%2Fpersonas%2Fjackie-chan-18897&psig=AOvVaw0OI4IrGDTAyh5XpTegYo2H&ust=1668861184754000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMCz4cbet_sCFQAAAAAdAAAAABAD'
       ]); 
       DB::table('images')->insert([
        'url' => 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1463207464959160321%2Fgqm3QEfP_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Firenemontero&tbnid=mqekORLnTJth4M&vet=12ahUKEwj0nqSV37f7AhUUgHMKHU5sAF0QMygBegUIARDlAQ..i&docid=HudMX-rjaonT0M&w=399&h=399&q=irene%20montero&safe=active&ved=2ahUKEwj0nqSV37f7AhUUgHMKHU5sAF0QMygBegUIARDlAQ'
        ]);
        DB::table('images')->insert([
            'url' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rtve.es%2Fnoticias%2F20200110%2Fperfil-alberto-garzon-ministro-consumo%2F1995051.shtml&psig=AOvVaw3RA8HcpaIhUTzsMw5K5zoV&ust=1668861381136000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKCAqqDft_sCFQAAAAAdAAAAABAH'
       ]); 
       DB::table('images')->insert([
        'url' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvalenciaplaza.com%2Fmazinger-z-el-robot-de-los-punos-de-oro&psig=AOvVaw2dm-M5qynEQoccMGwafyeS&ust=1668861405319000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIjl5Kzft_sCFQAAAAAdAAAAABAI'
        ]);
        DB::table('images')->insert([
            'url' => 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elle.com%2Fculture%2Fmovies-tv%2Fa24276316%2Fseina-shimabukuro-terrace-house%2F&psig=AOvVaw0LqFdEMFityrR5xMsdbNpM&ust=1668861448905000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCODct8Lft_sCFQAAAAAdAAAAABAD'
       ]);   

    }
}
