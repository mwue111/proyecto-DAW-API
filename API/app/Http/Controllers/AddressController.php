<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Models\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function index(){
        $addressesList = Address::all();
        return $addressesList;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'road_type' => 'required|string',
            'zip_code' => 'required|string|min:5',
            'number' => 'required|numeric',
            'name' => 'required|string|min:2|max:20',
            'remarks' => 'string',
            'town_id' => 'required|numeric'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        Address::create($request->all());
    }

    public function show($id){
        $address = Address::find($id);
        $address->store;
        return $address;
    }

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'road_type' => 'string',
            'zip_code' => 'string|min:5',
            'number' => 'numeric',
            'name' => 'string|min:2|max:20',
            'remarks' => 'string',
            'town_id' => 'numeric'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $address = Address::find($id);
        $address->update($request->all());
    }

    public function destroy($id){
        return Address::destroy($id);
    }

    //public function getStores()
}
