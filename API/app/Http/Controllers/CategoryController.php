<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index(){
        return Category::all();
    }

    public function store(Request $request){
        Category::create($request->all());
    }

    public function show($id){
        return Category::find($id);
    }
    public function getChildren($id){
        $category = Category::find($id);
        return $category->children;
    }

    public function update(Request $request, $id){
        $category = Category::find($id);
        $category->update($request->all());
    }

    public function destroy($id){
        return Category::destroy($id);
    }

}
