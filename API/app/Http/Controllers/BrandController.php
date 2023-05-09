<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Brand;
use App\Models\BrandImg;

class BrandController extends Controller
{
    public function index(){
        $brands = Brand::all();
        foreach($brands as $brand){
            $brand->brandImg;
        }
        return $brands;
    }

    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'id'=>'required|numeric'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        Brand::create($request->all());
    }

    public function show($id){
        return Brand::find($id);
    }

    public function getProducts($id){
        return Brand::find($id)->products;
    }

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'name' => 'string',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        $brand = Brand::find($id);
        $brand->update($request->all());
    }

    public function destroy($id){
        return Brand::destroy($id);
    }
}
