<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;

class StoreController extends Controller{
    public function index(){
        return Store::all();
    }

    public function store(Request $request){
        Store::create($request->all());
    }

    public function show($id){
        return Store::find($id);
    }

    public function update(Request $request, $id){
        $store = Store::find($id);
        $store->update($request->all());
    }

    public function destroy($id){
        return Store::destroy($id);
    }

    //insertar un tramo horario al crear una tienda
    
}


