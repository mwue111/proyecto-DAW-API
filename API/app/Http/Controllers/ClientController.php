<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller{

    public function index(){
        return Client::all();
    }

    public function show($id){
        $client = Client::find($id);
        $client->user;
        return $client;
    }
}
