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
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKc3KqxWctdl_17Xv33RKdot4ABLh2F4Vxjj0ymYPBbR3oXf7H4rCz_FrP9rMmH5ldow&usqp=CAU',
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
            'url' => '/storage/images/product_imgs/1686903756pomeloImg.png',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //9
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => '/storage/images/product_imgs/1686903754Pomelo4.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //10
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => '/storage/images/product_imgs/1686903753Pomelo3.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //11
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => '/storage/images/product_imgs/1686903753Pomelo1.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //12
        DB::table('files')->insert([
            'user_id' => 7,
            'url' => '/storage/images/product_imgs/1687115707bulgur2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //13
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687115707bulgur.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //14
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => '/storage/images/product_imgs/1687115708bulgur3.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //15
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687115896platano2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //16
        DB::table('files')->insert([
            'user_id' => 1,
            'url' => '/storage/images/product_imgs/1687115896platano.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //17
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => '/storage/images/product_imgs/1687115964zumo_pina.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //18
        DB::table('files')->insert([
            'user_id' => 1,
            'url' => '/storage/images/product_imgs/1687115964zumo_pina2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //19
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687116036ron.png',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //20
        DB::table('files')->insert([
            'user_id' => 3,
            'url' => '/storage/images/product_imgs/1687117792poloFresa.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        //21
        DB::table('files')->insert([
            'user_id' => 1,
            'url' => '/storage/images/product_imgs/1687117792poloFresa2.jpg',
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

        //tomate pera
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118542tomate-pera-product.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118542tomate-del-tipo-pera.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //??
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118542tomate-pera.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //Leche entera asturiana
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118787leche_asturiana3.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //fresas
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118963fresas2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118963fresas.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //cereales kellogs
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119111allbran2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119111allbran.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //patatas
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119183patata.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119183patata2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //lentejas
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119236lenteja2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119236lentejas.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //atún
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119341atun2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119341atun.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //jamón cocido
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119434jamonyork2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //huevos
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119628huevos3.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119628hevos.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //AOVE
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119785AOVE2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //margarina
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119932margarina3.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //Azúcar
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687120075azucar4.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687120075azucar5.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKc3KqxWctdl_17Xv33RKdot4ABLh2F4Vxjj0ymYPBbR3oXf7H4rCz_FrP9rMmH5ldow&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8CGZLig39FYHL_X45Zo3Lq6qTmVHz35wnEHkHxk6qZXqtTWwl1MaeVN8np06CN9F_yW4&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDr403RKei9f1SMXKJuIXwBo6We6unu-x0Xund2Wc41nhSVoiMJz0PrEiyQwsyEuqoE7k&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jXm_ysZdEzdfwiLBkXF15YSmBM9gwFoaCf5YibyVnL2uYGrjzHO9_X9Hft3y8hqBG1s&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://www.eldiasegovia.es/media/IMG/2020/53E88D53-C62A-C830-CF4BEEBA0878EE87.JPG',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://comefruta.es/wp-content/uploads/greengrocers-1111292_640-542x360.jpg',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_mLRqHNesvJHsG0Nt3Nv3gmOJfFzOllhQlIEcoQQSkLTA4F0inwBmMQGyHvC3085ByI&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvuOUyPPmPGbY10p7dtsFO7eOk94BMBDDMbRCuhNbOQiKwTVFLCPtUyZFwHfCo70oQZw&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxf2G-jNPeOX7WWOAXT83qRtMjFxppTkBsoKG5kdAXiS7XIGV5dKN8O5Hgib_PWEUd08s&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrGbv7dWAbRv32q6XowiCaSs9htgpyx-b5MmGc2n3HHtCcxOho8FqkuVNHbtThGP2h3Q&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxt8Xr3O2hAPkDPrMBybWBWxncpMCjitbKte91Zbv7JeNYk-UoK7Kmyg173D521ng7RJY&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWf2RFtXv3BT-hYNsXkFULZZ7OXs2f36PmJV5QFR0TlnM71xl00DJL-o0SD9JorGUdP4&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsVv-HRHo34W9vi_32eP0YrP8btIDvxpwLEvi6k_qjZVeiWZgJfLt6DuPKYwHuY_5SA8&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45xKSJbs_VdqpGJzCd_OqLSyze1kB1hwBMK1iORaQT1vcQhTHBXrY71Ia-YmspQFbPnM&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://disame.es/wp-content/uploads/2019/08/Eibar-1.jpg',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://www.equipotutienda.com/Files/110193/Img/21/Mobiliario-fruteria-efecto-madera-zoom.jpg',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://w5b8d7x4.rocketcdn.me/wp-content/uploads/2022/08/Carniceria_moderna.jpg',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://i.pinimg.com/550x/a5/a8/af/a5a8afa377ea244799076532ab3b4403.jpg',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://www.pescaderiaelcantil.com/wp-content/uploads/2018/10/f1-1.jpg',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://media-cdn.tripadvisor.com/media/photo-s/04/8d/1a/af/sea-me-peixaria-moderna.jpg',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://tropicanafrutasdelmundo.es/wp-content/uploads/2018/02/11254636_728089610659563_5914493938009256534_o.jpg',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XQyL7Emc_Et6CFQpgIwo1FY_JNm_4ZFLJ3jAujYOcOBgnhiM8-FuGTZzNntiugQluDs&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa28xcDFqUP0aWr4HGk_llZOBw-4pPUuzvP1XYxBV-Jua89g4RNw1Gn_xmLGLSJUbwYyM&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 3,
            'url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwrNiMtrhEZH0Snjyqebksz9KEaxfwPYLTdOjOWFA9Qz2gUwiPSX5QmP9Rp9gUlPvYkc&usqp=CAU',
            'image_type' => 'store_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 4,
            'url' => '/storage/images/profile_imgs/users/3meses/barber.jpg',
            'image_type' => 'profile_imgs',
            'deleted' => 0,
        ]);

        //danonino fresa
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118002danoninoFresa.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118002danoninoFresa4.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118002danoninoFresa3.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118002danoninoFresa2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //Leche entera asturiana
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118787leche_asturiana2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118787leche_asturiana.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118788asturiana-leche-entera-1l.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //fresas
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118963fresas-ecológicas.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687118963fresas.jpeg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);        
        
        //jamón cocido
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119434jamonyork3.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119434jamonyork.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        
        //huevos
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119628huevos2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //AOVE
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119786AOVE3.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);
        
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119786aove.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //margarina
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119932margarina2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687119932margarina3.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        //Azúcar
        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687120075azucar3.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687120075azucar2.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);

        DB::table('files')->insert([
            'user_id' => 2,
            'url' => '/storage/images/product_imgs/1687120075azucar.jpg',
            'image_type' => 'product_imgs',
            'deleted' => 0,
        ]);



    }
}
