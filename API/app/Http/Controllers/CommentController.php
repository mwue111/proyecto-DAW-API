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
        $comments = Comment::where('verified', true)->inRandomOrder()->take(3)->get();

        return response()->json($comments, 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required',
            'comentario' => 'required',
        ]);

        $validatedData['verified'] = $request->input('verified', false); 

        $comment = Comment::create($validatedData);

        return response()->json(['message' => 'Comentario enviado'], 200);
    }

    public function show($id)
    {
        $comment = Comment::findOrFail($id);

        return response()->json($comment, 200);
    }

    public function update(Request $request, $id)
    {
        $comment = Comment::find($id);
        $comment->update($request->all());

        return response()->json(['message' => 'Comment updated'], 200);
    }

    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);
        $comment->delete();

        return response()->json(['message' => 'Comment deleted'], 200);
    }

}

