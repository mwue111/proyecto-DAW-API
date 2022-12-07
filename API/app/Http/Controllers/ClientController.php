<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller{
    
    public function index(){
        return Client::all();
    }

    public function store(Request $request){
        $client = Client::create($request);
    }

    public function show($id){
        $client = Client::find($id);
        return $client;
    }

    public function update(Request $request, $id){
        $client = Client::find($id);
        $client->update($request->all());
    }

    public function destroy($id){
        $client = Client::destroy($id);
        return $client;
    }
}
