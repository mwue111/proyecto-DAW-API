<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller{
    
    public function index(){
        return Client::all();
    }

    /* Los clientes se crean desde usuario
    public function store(Request $request){
        $client = Client::create($request->all());
    }
    */
    
    //mostrar el cliente de un id concreto y sus datos como usuario
    public function show($id){
        $client = Client::find($id);
        $client->user;
        return $client;
    }
    
    //Este controlador se mantiene para la gestión de las reservas
}