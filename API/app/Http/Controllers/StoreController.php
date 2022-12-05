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

    //obtener todos los tramos horarios de una tienda:
    public function getStores($id){
        $store = Store::find($id);
        return $store->schedules;
    }

    //insertar un tramo horario al crear una tienda
    public function createSchedules(Request $request){
        $store = Store::create($request->all());
        $store->schedules()->attach($request->schedules);
    }

    //actualizar un registro
    public function setSchedule(Request $request, $id){
        $store = Store::find($id);
        $store->fill($request->all());
        $store->schedules()->sync($request->schedules);
        $store->save();
    }

    //eliminar los horarios de una tienda
    public function deleteSchedule($id){
        $store = Store::find($id);
        $store->schedules()->detach();
        //$store->delete();
    }

}