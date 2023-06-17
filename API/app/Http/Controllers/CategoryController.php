<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index(){
        return Category::all();
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'string',
            'id'=>'required|numeric',
            'parent_category_id' => 'numeric'
        ]);
        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

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
        $validator = Validator::make($request->all(), [
            'name' => 'string',
            'id'=>'required|numeric',
            'parent_category_id' => 'numeric'
        ]);
        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $category = Category::find($id);
        $category->update($request->all());
    }

    public function destroy($id){
        return Category::destroy($id);
    }

}
