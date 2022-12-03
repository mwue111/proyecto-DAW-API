<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SpecialDay;

class SpecialDayController extends Controller{
    
    public function index(){
        return SpecialDay::all();
    }

    public function store(Request $request){
        SpecialDay::create($request->all());
    }

    public function show($id){
        return SpecialDay::find($id);
    }

    public function update(Request $request, $id){
        $specialDay = SpecialDay::find($id);
        $specialDay->update($request->all());
    }

    public function destroy($id){
        return SpecialDay::destroy($id);
    }
}
