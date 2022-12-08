<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;

class StoreController extends Controller{
    public function index(){
        return Store::all();
    }

    public function store(Request $request){
        $store = Store::create($request->all());
        $store->products()->attach($request->products);
    }

    public function show($id){
        return Store::find($id);
    }

    public function getProducts($id){
        $store = Store::find($id);
        return $store->products;
    }

    public function getSales($id){
        $store = Store::find($id);
        return $store->sales;
    }

    public function addProducts(Request $request, $id){
        $store = Store::find($id);
        $store->products()->attach($request->products);
    }

    public function update(Request $request, $id){
        $store = Store::find($id);
        $store->update($request->all());
    }

    public function destroy($id){
        return Store::destroy($id);
    }

    public function updateProducts(Request $request, $id){
        $store = Store::find($id);
        $store->products()->sync($request->products);
    }

    public function deleteProducts(Request $request, $id){
        $store = Store::find($id);
        $store->products()->detach($request->products);
    }
}
