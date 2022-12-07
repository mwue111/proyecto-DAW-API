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
        $store->schedules()->attach($request->schedules);
        $store->specialDays()->attach($request->specialDays);
    }

    public function show($id){
        $store = Store::find($id);
        $store->schedules;
        $store->specialDays;
        return $store;
    }

    public function getProducts($id){
        $store = Store::find($id);
        return $store->products;
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
        $store = Store::destroy($id);
        return $store;
    }

    //Los métodos que podían pasarse a las funciones store, show, update y destroy se han comentado.
    /*
    public function getStores($id){
        $store = Store::find($id);
        return $store->schedules;
    }

    public function createSchedules(Request $request){
        $store = Store::create($request->all());
        $store->schedules()->attach($request->schedules);
    }
    */

    //actualizar un registro (aparte porque puede que al actualizar una tienda no sea necesario actualizar su horario)
    public function setSchedule(Request $request, $id){
        $store = Store::find($id);
        $store->fill($request->all());
        $store->schedules()->sync($request->schedules);
        $store->save();
    }

    //eliminar los horarios de una tienda (hay persistencia de datos: al borrar la tienda se borran)
    public function deleteSchedule($id){
        $store = Store::find($id);
        $store->schedules()->detach();
        //$store->delete();
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
    /*
    public function getSpecialDays($id){
        $store = Store::find($id);
        return $store->specialDays;
    }

    //insertar un día especial a la tienda: pasado a la función store.
    public function createSpecialDay(Request $request){
        $store = Store::create($request->all());
        $store->specialDays()->attach($request->specialDays);
    }
    */
    
    //dejado aparte porque al actualizar una tienda puede que no sea necesario cambiar sus días de horario especial
    public function setSpecialDay(Request $request, $id){
        $store = Store::find($id);
        $store->fill($request->all());
        $store->specialDays()->sync($request->specialDays);
        $store->save();
    }

    //Hay persistencia de datos
    public function deleteSpecialDay($id){
        $store = Store::find($id);
        $store->specialDays()->detach();
    }
}
