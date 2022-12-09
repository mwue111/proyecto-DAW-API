<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller{
    
    public function index(){
        return User::all();
    }

    public function store(Request $request){
        $user = User::create($request->all());
    }

    public function show($id){
        $user = User::find($id);
        return $user;
    }

    public function update(Request $request, $id){
        $user = User::find($id);
        $user->update($request->all());
    }

    public function destroy($id){
        $user = User::destroy($id);
        return $user;
    }
}
