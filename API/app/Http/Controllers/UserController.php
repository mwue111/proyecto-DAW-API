<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Client;
use App\Models\Owner;
use App\Models\Administrator;
use DateTime;
use DateTimeZone;
use DateInterval;

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
        //identificar al usuario
        $user = User::find($id);

        foreach($user->files as $file){
            if($file->image_type === 'profile_imgs'){
                $user['avatar'] = $file->url;
            }
        }
        // $user->client;

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
        $user = User::findOrFail($id);

        switch($user->type) {
            case 'owner': $user->owner->delete(); break;
            case 'administrator': $user->administrator->delete(); break;
            case 'client': $user->client->delete(); break;
        }

        $user->destroy($user->id);
        // return User::destroy($id);
    }

    public function findUsername ($username){
        $user = User::where('username', $username)->first();
        return $user->id;
    }

    public function deleteOldUsers(Request $request) {
        $date = new DateTime('now', new DateTimeZone('Europe/Madrid'));
        $date->sub(DateInterval::createFromDateString($request->data . ' months'));
        $format = $date->format('Y-m-d H:i:s');

        $oldUsers = User::where('updated_at', '<', $format)->where('deleted', '=', '1')->get();

        foreach($oldUsers as $oldUser) {
        //     switch($oldUser->type) {
        //         case 'owner': $oldUser->owner; break;
        //         case 'administrator': $oldUser->administrator; break;
        //         case 'client': $oldUser->client; break;
        //     }

            $oldUser->files->each(function ($url) {
                $url->file;
            });
        }

        return $oldUsers;
    }
}
