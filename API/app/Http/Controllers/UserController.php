<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Client;

class UserController extends Controller{
    
    public function index(){
        $users = User::all();
        foreach($users as $user){
            //Para prescindir del controlador de cliente
            switch($user->type){
                case 'client': $user->client; break;
                case 'owner': $user->owner; break;
                case 'admin': $user->admin; break;
            }
            
        }
        return $users;
    }

    public function store(Request $request){
        $user = User::create($request->all());
    
        switch($user->type){
            case 'client': $client = new Client(); 
                        $client->user_id = $user->id;
                        $client->save(); break;
            case 'owner': $owner = new Owner();
                        $owner->user_id = $user->id;
                        $owner->verified = 0;
                        $owner->save(); break;
            case 'admin': $admin = new Admin();
                        $admin->user_id = $user->id;
                        $admin->last_login = date('Y-m-d H:i:s');
                        $admin->save();break;
        }
        
        /*
        if($user->type == 'client'){
            $client = new Client();
            $client->user_id = $user->id;
            $client->save();
        }
        */
        //convertirlo en switch con los datos 
    }

    public function show($id){
        $user = User::find($id);
        $user->client;
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
