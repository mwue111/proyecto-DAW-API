<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tag;

class TagController extends Controller
{
    public function index(){
        return Tag::all();
    }

    public function store(Request $request){
        Tag::create($request->all());
    }

    public function show($id){
        return Tag::find($id);
    }

    public function update(Request $request, $id){
        $tag = Tag::find($id);
        $tag->update($request->all());
    }

    public function destroy($id){
        return Tag::destroy($id);
    }

}
