<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function getAllComments()
    {
        $comments = Comment::all();

        return response()->json($comments, 200);
    }
    
    public function getRandomComments()
    {
        $comments = Comment::inRandomOrder()->take(3)->get();

        return response()->json($comments, 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required',
            'comentario' => 'required',
        ]);

        $comment = Comment::create($validatedData);


        return response()->json(['message' => 'Comentario enviado'], 200);
    }
}

