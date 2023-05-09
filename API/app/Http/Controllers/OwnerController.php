<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Owner;

class OwnerController extends Controller{

    public function index(){
        $owners=Owner::all();
        foreach($owners as $owner){
            $owner->user;
            $owner->each(function($owner){
                $owner->stores;
            });
        }
        return $owners;
    }

    public function show($id){
        $owner = Owner::find($id);
        $owner->user;
        $owner->stores;
        return $owner;
    }

    public function update(Request $request, $id){

        $validator = Validator::make($request->all(), [
            'user_id' => 'required|numeric',
            'verified' => 'required|numeric'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        $owner = Owner::find($id);
        $owner->update($request->all());
        return $owner;
    }
}
