<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TimeSlot;

class TimeSlotController extends Controller{
    public function index(){
        //return TimeSlot::all();
        $tss = TimeSlot::all();
        foreach($tss as $ts){
            $ts->schedules;
        }
        return $tss;
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

    //se pasa el id que será de timeSlots para que devuelva todos los días que tienen esa franja concreta
    public function getSchedules($id){
        $schedules = TimeSlot::find($id)->schedules;
        return $schedules;
    }
}
