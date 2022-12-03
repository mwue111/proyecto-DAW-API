<?php

namespace App\Http\Controllers;

use App\Models\State;
use Illuminate\Http\Request;

class StateController extends Controller
{
    public function index(){
        $statesList = State::all();
        return $statesList;
    }

    public function getTowns($id){
        $townsList = State::find($id)->town;
        return $townsList;
    }

    public function store(Request $request)
    {
        State::create($request->all());
    }

    public function show($id)
    {
        return State::find($id);
    }

    public function update(Request $request, $id)
    {
        $state = State::find($id);
        $state->update($request->all());
    }

    public function destroy($id)
    {
        return State::destroy($id);
    }
}
