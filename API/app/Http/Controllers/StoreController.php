<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Store;
use App\Models\StoreImg;
use App\Models\Address;
use App\Models\Town;
use DateTime;
use DateTimeZone;
use DateInterval;

class StoreController extends Controller{
    public function index(){
        $stores = Store::all();
        foreach($stores as $store){
            $store->products;
            $store->owner->user;
            $store->owner;
            $store->schedules->each(function($schedule){
                $schedule->timeSlot;
            });
            $store->specialDays;
            $store->owner->user;
            $store->address;
            if($store->address !=null)
            $store->address->town->state;
            $store->storeImgs->each(function($image){
                $image->file;
            });
        }

        return $stores;
    }

    public function store(Request $request){
        $address = Address::create($request->address);

        $store = new Store($request->all());
        $store->address_id = $address->id;
        $store->save();

        $store->products()->attach($request->products);
        $store->schedules()->attach($request->schedules);
        $store->specialDays()->attach($request->specialDays);
    }

    public function show($id){
        $store = Store::find($id);
        $store->storeImgs->each(function($image){
            $image->file;
        });
        $store->schedules->each(function($schedule){
            $schedule->timeSlot;
        });
        $store->products;
        $store->specialDays;
        $store->owner->user;
        $store->address;
        if($store->address !=null)
        $store->address->town->state;
        return $store;
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

        if (isset($request->address)) {
            $address = $store->address;
            if(isset($request->address['town']['id'])){
                $town = Town::find($request->address['town']['id']);
                $address->town_id = $town->id;
            }
            $address->update($request->address);
            $store->address_id = $address->id;
            $store->save();
        }
    }

    public function destroy($id){
       return Store::destroy($id);
    }

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

    // funcion para recibir todos los nombres de las tiendas
    public function getNames(){
        return Store::select('name', 'id')->get();
    }

    public function deleteOldStores(Request $request){
        //todo en formato fechas
        $date = new DateTime('now', new DateTimeZone('Europe/Madrid'));     //now() con horario en España
        $date->sub(DateInterval::createFromDateString($request->data . ' months')); //llamada al método sub, a la clase dateinterval que recoge data y lo interpreta como meses
        $test = $date->format('Y-m-d H:i:s');

        $oldStores = Store::where("updated_at", "<", $test)->where("deleted", "=", "1")->get();
        foreach($oldStores as $store){
            $store->owner->user;
            $store->schedules->each(function($schedule){
                $schedule->timeSlot;
            });
            $store->specialDays;
            $store->address->town->state;
        }

        return $oldStores;
    }

}
