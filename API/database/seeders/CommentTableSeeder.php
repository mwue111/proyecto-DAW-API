<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Seeder;

class CommentTableSeeder extends Seeder
{
    public function run()
    {
        $comments = [
            [
                'nombre' => 'Maria García',
                'comentario' => 'Encontré la tienda perfecta para comprar regalos únicos para mi familia y amigos en Almería. ¡Altamente recomendada!',
            ],
            [
                'nombre' => 'Pedro Sánchez',
                'comentario' => 'Me encanta comprar productos locales y de alta calidad en Almería. ¡La tienda que encontré aquí nunca me decepciona!',
            ],
            [
                'nombre' => 'Ana López',
                'comentario' => 'Siempre encuentro los ingredientes más frescos y sabrosos en las tiendas locales de Almería. ¡Una experiencia de compra única!',
            ],
        ];

        foreach ($comments as $comment) {
            Comment::create($comment);
        }
    }
}

