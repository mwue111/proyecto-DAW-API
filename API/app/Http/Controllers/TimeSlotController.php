<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TimeSlot;

class TimeSlotController extends Controller{
    public function index(){
        return TimeSlot::all();
    }

    public function store(Request $request){
        TimeSlot::create($request->all());
    }

    public function show($id){
        return TimeSlot::find($id);
    }

    public function update(Request $request, $id){
        $timeSlot = TimeSlot::find($id);
        $timeSlot->update($request->all());
    }

    public function destroy($id){
        return TimeSlot::destroy($id);
    }

    //para obtener los días en los que están las franjas horarias con un id concreto
    public function getSchedules($id){
        $schedules = TimeSlot::find($id)->schedules;
        return $schedules;
    }
}
