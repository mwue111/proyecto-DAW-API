<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SchedulesStore;

class SchedulesStoreController extends Controller{
    
    public function index(){
        return SchedulesStore::all();
    }

    //para insertar una tienda y sus horarios: ¿attach aquí?
    public function store(Request $request){
        SchedulesStore::create($request->all());
    }

    public function show($id){
        return SchedulesStore::find($id);
    }

    public function update(Request $request, $id){
        $schedulesStore = SchedulesStore::find($id);
        $schedulesStore->update($request->all());
    }

    public function destroy($id){
        return SchedulesStore::destroy($id);
    }
}

