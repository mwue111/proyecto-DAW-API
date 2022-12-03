<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function index(){
        $addressesList = Address::all();
        return $addressesList;
    }

    public function store(Request $request){
        Address::create($request->all());
    }

    public function show($id){
        return Address::find($id);
    }

    public function update(Request $request, $id){
        $address = Address::find($id);
        $address->update($request->all());
    }

    public function destroy($id){
        return Address::destroy($id);
    }
}
