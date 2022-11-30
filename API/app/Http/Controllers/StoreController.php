<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;

class StoreController extends Controller
{
    public function index(){
        $storesList = Store::all();
        return $storesList;
    }

    public function create(){
        //
    }

    public function store(Request $request){
        //
    }

    public function show($id){
        $store = Store::find($id);
        return $store;
    }

    public function edit($id){
        //
    }

    public function update(Request $request, $id){
        //
    }

    public function destroy($id){
        //
    }
}
