<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Administrator;

class AdministratorController extends Controller{
    
    public function index(){
        return Administrator::all();
    }

    public function show($id){
        $admin = Administrator::find($id);
        $admin->user;
        return $admin;
    }
}

