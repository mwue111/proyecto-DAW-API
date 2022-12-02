<?php

namespace App\Http\Controllers;

use App\Models\Town;
use Illuminate\Http\Request;

class TownController extends Controller
{
    public function index(){
        $townsList = Town::all();
        return $townsList;
    }

    // public function getStates(){
    //     $townsList = Town::all();
    //     return $townsList->state;
    // }

    public function store(Request $request){
        Town::create($request->all());
    }

    public function show($id){
        return Town::find($id);
    }

    public function update(Request $request, $id){
        $town = Town::find($id);
        $town->update($request->all());
    }

    public function destroy($id){
        return Town::destroy($id);
    }
}
