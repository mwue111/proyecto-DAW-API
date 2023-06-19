<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
// use App\Models\Owner;
// use App\Models\Administrator;
// use App\Models\Client;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
// use Illuminate\Support\Facades\Cookie;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
            'username' => ['required', 'string', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'surname1' => $request->surname1,
            'surname2' => $request->surname2,
            'type' => $request->type,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        switch($user->type){
            case 'owner': $user->owner()->create(['user_id' => $user->id, 'verified' => 0]); break;
            case 'client': $user->client()->create(['user_id' => $user->id]); break;
            case 'administrator': $user->administrator()->create(['user_id' => $user->id, 'last_login'=> now()]); break;
        }

        return response()->noContent();
    }

    public function adminStore(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'], //'unique:users, columna a comprobar, id a ignorar' https://laravel.com/docs/4.2/validation#rule-unique
            'birth_date' => ['string'],
            'username' => ['required', 'string', 'max:255', 'unique:users'],
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'surname1' => $request->surname1,
            'surname2' => $request->surname2,
            'birth_date' => $request->birth_date,
            'type' => $request->type,
            'email' => $request->email,
        ]);

        switch($user->type){
            case 'owner': $user->owner()->create(['user_id' => $user->id, 'verified' => 0]); break;
            case 'client': $user->client()->create(['user_id' => $user->id]); break;
            case 'administrator': $user->administrator()->create(['user_id' => $user->id, 'last_login'=> now()]); break;
        }

        return response()->json($user);
    }
}
