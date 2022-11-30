<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Unit;

class UnitController extends Controller
{
    public function index(){
        return Unit::all();
    }

    public function store(Request $request){
        Unit::create($request->all());
    }

    public function show($id){
        return Unit::find($id);
    }

    public function update(Request $request, $id){
        $unit = Unit::find($id);
        $unit->update($request->all());
    }

    public function destroy($id){
        return Unit::destroy($id);
    }
}
