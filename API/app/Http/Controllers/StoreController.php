<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Store;
use App\Models\StoreImg;
use App\Models\Address;
use App\Models\Town;
use DateTime;
use DateTimeZone;
use DateInterval;
use App\Models\User;

class StoreController extends Controller{
    public function index(){
            $stores = Store::with([
                'products',
                'owner.user',
                'schedules.timeSlot',
                'specialDays',
                'address.town.state',
                'storeImgs.file'
            ])->get();

            return $stores;
        }

    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'name' => 'required',
            'telephone1' => 'required|numeric|min:9',
            'telephone2' => 'numeric|min:9',
            'description' => 'required',
            'user_id' => 'required|numeric'
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        $address = Address::create($request->get('address')); 
    
        $store = new Store($request->all());
        $store->address_id = $address->id;
        $store->save();
    
        $store->products()->attach($request->get('products'));
        $store->schedules()->attach($request->get('schedules'));
        $store->specialDays()->attach($request->get('specialDays'));

        return response()->json(['store_id' => $store->id]);
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

        $validator = Validator::make($request->all(), [
            'email' => 'email',
            'name' => 'regex:/^([A-Za-zÑñáéíóúÁÉÍÓÚ0-9 ]+)$/',
            'telephone1' => 'numeric|min:9',
            'telephone2' => 'numeric|min:9',
            'description' => 'string'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

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

    public function setSchedule(Request $request, $id){
        $store = Store::find($id);
        $store->fill($request->all());
        $store->schedules()->sync($request->schedules);
        $store->save();
    }

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

    public function setSpecialDay(Request $request, $id){
        $store = Store::find($id);
        $store->fill($request->all());
        $store->specialDays()->sync($request->specialDays);
        $store->save();
    }

    public function deleteSpecialDay($id){
        $store = Store::find($id);
        $store->specialDays()->detach();
    }

    public function getNames(){
        return Store::select('name', 'id')->get();
    }

    public function deleteOldStores(Request $request){
        $date = new DateTime('now', new DateTimeZone('Europe/Madrid'));
        $date->sub(DateInterval::createFromDateString($request->data . ' months'));
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

    public function getDefaultStore(Request $request){
        $user = User::find($request->user_id);

        $defaultStore = new Store();
        $defaultStore->name = 'La tienda de ' . $request->username;
        $defaultStore->description = 'Descripcion de mi tienda';
        $defaultStore->email = 'mi@tienda.com';
        $defaultStore->telephone1 = '1234567890';
        $defaultStore->telephone2 = '';
        $defaultStore->deleted = false;
        $defaultStore->user_id = $user->id;

        $defaultAddress = new Address();
        $defaultAddress->road_type = 'Calle';
        $defaultAddress->zip_code = '12345';
        $defaultAddress->number = '1';
        $defaultAddress->name = 'Mayor';
        $defaultAddress->remarks = '';
        $defaultAddress->town_id = 1;

        $defaultAddress->save();

        $defaultStore->address_id = $defaultAddress->id;

        $defaultStore->save();

        return $defaultStore;
    }

    public function productoExistente(Request $request){
        $storeId = $request->input('storeId');
        $productId = $request->input('productId');
        $stock = $request->input('stock');
        $precio = $request->input('precio');
        $unidad = $request->input('unidad');
        $comentarios = $request->input('comentarios');
    
        $store = Store::find($storeId);
        $store->products()->attach($productId, [
            'stock' => $stock,
            'value' => $precio,
            'unit' => $unidad,
            'remarks' => $comentarios
        ]);
    
        return response()->json(['message' => 'Product added to store successfully'], 200);
    }

    public function deleteProduct(Request $request){
    $storeId = $request->input('storeId');
    $productId = $request->input('productId');

    $store = Store::find($storeId);

    if (!$store) {
        return response()->json(['message' => 'Store not found'], 404);
    }

    $product = $store->products()->find($productId);

    if (!$product) {
        return response()->json(['message' => 'Product not found in the store'], 404);
    }

    $store->products()->detach($productId);

    return response()->json(['message' => 'Product deleted from the store'], 200);
}

    public function getStoreByUser($id){
        $stores = Store::where('user_id', $id)->get();
        return $stores->first();
    }



}

