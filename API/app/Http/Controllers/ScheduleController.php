<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;

class ScheduleController extends Controller{
    public function index(){
        //return Schedule::all();
        $schedules = Schedule::all();
        foreach($schedules as $schedule){
            $schedule->timeSlot;
            $schedule->stores;
        }
        return $schedules;
    }

    public function store(Request $request){
        Schedule::create($request->all());
    }

    public function show($id){
        return Schedule::find($id);
    }

    public function update(Request $request, $id){
        $schedule = Schedule::find($id);
        $schedule->update($request->all());
    }

    public function destroy($id){
        return Schedule::destroy($id);
    }
}


