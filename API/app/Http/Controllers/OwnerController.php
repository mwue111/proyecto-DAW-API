<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Owner;

class OwnerController extends Controller{
    
    public function index(){
        $owner=Owner::all();
        foreach($owner as $owner){
            $owner->user;
            $owner->each(function($owner){
                $owner->stores;
            });
        }
    }

    public function show($id){
        $owner = Owner::find($id);
        $owner->user;
        $owner->stores;
        return $owner;
    }

    //modificar el valor de la variable verified
    public function update(Request $request, $id){
        $owner = Owner::find($id);
        $owner->update($request->all());
        return $owner;
    }
}
