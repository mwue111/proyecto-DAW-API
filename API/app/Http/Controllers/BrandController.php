<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brand;

class BrandController extends Controller
{
    public function index(){
        return Brand::all();
    }

    public function store(Request $request){
        Brand::create($request->all());
    }

    public function show($id){
        return Brand::find($id);
    }

    public function update(Request $request, $id){
        $brand = Brand::find($id);
        $brand->update($request->all());
    }

    public function destroy($id){
        return Brand::destroy($id);
    }
}
