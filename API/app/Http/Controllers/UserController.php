<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Client;
use App\Models\Owner;
use App\Models\Administrator;

class UserController extends Controller{

    public function index(){
        $users = User::all();

        //Comentado: mandado al front el usuario con las url de imágenes de perfil
        // $users = User::with('files')->get();
        // $data = [];
        // $data['users'] = $users;

        foreach($users as $user){
            // $data['avatar'][] = $user->files->where('image_type', 'profile_imgs')->first();

            switch($user->type){
                case 'client': $user->client; break;
                case 'owner': $user->owner; break;
                case 'administrator': $user->administrator; break;
            }

        }
        // return $data;
        return $users;
    }

    public function show($id){
        $user = User::find($id);
        $user->client;
        return $user;
    }

    public function update(Request $request, $id){
        $user = User::find($id);

        if($request->verified !== null && $user->owner->findOrFail($id)){
            $user->owner()->update($request->all());
        }

        $user->update($request->all());
    }

    public function destroy($id){
        $user = User::destroy($id);
        return $user;
    }

    public function findUsername ($username){
        $user = User::where('username', $username)->first();
        return $user->id;
    }
}
