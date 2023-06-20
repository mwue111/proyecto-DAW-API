<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\File;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Document;
use App\Models\ProfileImg;
use App\Models\StoreImg;
use App\Models\Store;
use App\Models\BrandImg;
use App\Models\Brand;
use App\Models\ProductImg;
use App\Models\Product;

class FileController extends Controller
{
    public function index(){
        $files = File::all();
        foreach($files as $file){
            switch($file->type){
                case 'document': $file->document; break;
                case 'profile_imgs': $file->profileImgs; break;
                case 'store_imgs': $file->storeImgs; break;
                case 'brand_imgs': $file->brandImgs; break;
                case 'product_imgs': $file->productImgs; break;
            }
        }
        return $files;
    }

    public function store(Request $request){

        $validator=Validator::make($request->all(),[
            'image_type'=>'required',
            'user_id'=>'required'
        ]);

        if($request->image_type !== 'document'){
            $validatorImg = Validator::make($request->all(), [
                'file' => 'mimes:jpeg,jpg,png'
            ]);
            if($validatorImg->fails()){
                return response()->json($validatorImg->errors(), 400);
            }
        }

        if($validator->fails()){
            return response()->json($validator->errors(),400);
        }

        if($request->has('file')){
            // dd('entra a has(file)');
            //poner los if dentro del switch

            if($request->image_type === 'product_imgs') {
                $name = time() . $request->name;
                $request->file->storeAs('public/images/' . $request->image_type, $name);

            }
            else if($request->image_type === 'profile_imgs'){
                $name = time() . $request->name;
                $request->file->storeAs('public/images/' . $request->image_type . '/users/' . $request->username, $name);
            }
            else if($request->image_type === 'document'){
                $file = $request->file('file');
                $name = time() . $request->name;
                // $name = time().$file->getClientOriginalName();
                // dd($name);
                // $file->move(public_path().'/files/'.$request->image_type , $name);

                $file->storeAs('public/docs/users/' . $request->username, $name);

            }

            switch($request->image_type){
                case 'document':
                                $file = File::create([
                                    'user_id' => $request->user_id,
                                    // 'url' => public_path().'/files/'. $name,
                                    'url' => '/storage/docs/users/' . $request->username . '/'. $name,
                                    'image_type' => $request->image_type,
                                    'deleted' => false
                                ]);

                                $file->document()->create([
                                    'file_id' => $file->id,
                                    'expiration_date' => \Carbon\Carbon::now()->addYears(2)
                                ]);
                                // dd($file);
                                break;

                case 'profile_imgs':
                                    $name = time() . $request->name;
                                    $file = File::create([
                                        'user_id' => $request->user_id,
                                        'url' => '/storage/images/' . $request->image_type . '/users/' . $request->username .'/'. $name,
                                        'image_type' => $request->image_type,
                                        'deleted' => 0
                                    ]);
                                    $file->profileImgs()->create(['file_id' => $file->id]);
                                    break;

                case '"store_imgs"': $name = time(). $request->name;    //TODO
                                    $file = File::create([
                                        'user_id' => $request->user_id,
                                        'url' => '/files/stores_imgs' . $name,
                                        'image_type' => $request->image_type,
                                        'deleted' => 0
                                    ]);

                                    $store = new StoreImg();
                                    $store->file_id = $file->id;

                                    $storeId = Store::find($request->store_id);
                                    $store->store_id = $storeId->id;
                                    $store->save(); break;

                case 'product_imgs': $name = time() . $request->name;
                                    $file = File::create([
                                        'user_id' => $request->user_id,
                                        'url' => '/storage/images/product_imgs/' . $name,
                                        'image_type' => $request->image_type,
                                        'deleted' => 0
                                    ]);
                                    $product = new ProductImg();
                                    $product->file_id = $file->id;
                                    if(!$request->product_id){
                                        $product->product_id = Product::latest('id')->first()->id;
                                    }
                                    else{
                                        $product->product_id = $request->product_id;
                                    }
                                    $product->save();
                                    break;

                case '"brand_imgs"': $brand = new BrandImg();   //TODO
                                    $brand->file_id = $file->id;

                                    $brandId = Brand::find($request->brand_id);
                                    $brand->brand_id = $brandId->id;
                                    $brand->save(); break;

                }

                $response["status"] = "successs";
                $response["message"] = "Success! file(s) uploaded";
            }
            else{
                $response["status"] = "failed";
                $response["message"] = "Failed! file(s) not uploaded";
            }

        return response()->json($response);
    }

    public function show($id){
        $file = File::find($id);
        switch($file->type){
            case 'document': $file->document; break;
            case 'profile_imgs': $file->profileImgs; break;
            case 'product_imgs': $file->productImgs; break;
            case 'store_imgs': $file->storeImgs; break;
            case 'brand': $file->brandImgs; break;
        }

        return $file;
    }

    public function update(Request $request, $id){
        $user = User::findOrFail($id);

        if($request->has('file')){
            $hasDocuments = $user->files->where('image_type', 'document')->isNotEmpty();
            $hasProfileImg = $user->files->where('image_type', 'profile_imgs')->isNotEmpty();

            //Si no hay documentos o imágenes de perfil previas, crear una nueva:
            if($request->image_type === 'document' && !$hasDocuments){
                $this->store($request);
            }

            if($request->image_type === 'profile_imgs' && !$hasProfileImg){
                $this->store($request);
            }

            else{
                //nombre del nuevo documento
                $name = time() . $request->name;

                //itera sobre los documentos que tenga el usuario para ver remplazarlos
                foreach($user->files as $files) {
                    switch($files->image_type) {
                        case 'document':
                            if($request->image_type === 'document'){
                                //borrar en servidor
                                $oldFile = File::findOrFail($files->id);
                                $path = str_replace('/storage/', '/public/', $oldFile->url);
                                Storage::delete($path);
                                $oldFile->delete();

                                //subir el nuevo documento a servidor
                                $newFile = $request->file('file');
                                $newFile->storeAs('public/docs/users/' . $request->username, $name);

                                //subir el nuevo documento a base de datos
                                $file = File::create([
                                    'user_id' => $request->user_id,
                                    'url' => '/storage/docs/users/' . $request->username . '/' . $name,
                                    'image_type' => $request->image_type,
                                    'deleted' => false
                                ]);

                                //añadir en la tabla documents
                                $file->document()->create(['file_id' => $file->id, 'expiration_date' => \Carbon\Carbon::now()->addYears(2)]);
                            }
                            break;

                        case 'profile_imgs':
                            if($request->image_type === 'profile_imgs'){
                                $oldProfile = File::findOrFail($files->id);
                                $path = str_replace('/storage/', '/public/', $oldProfile->url);
                                Storage::delete($path);
                                $oldProfile->delete();

                                $name = time() . $request->name;
                                $newProfile = $request->file('file');
                                $newProfile->storeAs('public/images/' . $request->image_type . '/users/' . $request->username, $name);

                                $file = File::create([
                                            'user_id' => $request->user_id,
                                            'url' => '/storage/images/' . $request->image_type . '/users/' . $request->username .'/'. $name,
                                            'image_type' => $request->image_type,
                                            'deleted' => 0
                                        ]);

                                $file->profileImgs()->create(['file_id' => $file->id]);
                            }

                            break;
                    }
                }
            }

            $response["status"] = "successs";
            $response["message"] = "Success! file(s) uploaded";
        }
        else{
            $response["status"] = "failed";
            $response["message"] = "Failed! file(s) not uploaded";
        }

        return response()->json($response);
    }

    public function destroy($id){
        $file = File::findOrFail($id);
        $url = $file->url;
        $url = str_replace('storage', 'public', $file->url);
        Storage::delete($url);   //comentado para que no borre del servidor mientras se prueba
        return $file->delete();
    }

    public function deleteAvatar($id){
        $user = User::findOrFail($id);
        foreach($user->files as $files){
            if($files->image_type === 'profile_imgs'){
                $this->destroy($files->id);
            }
        }
    }

    public function getImages($table, $id){

        switch($table){
            case 'tienda': $store = Store::with('storeImgs')->find($id);
                            $images = $store->storeImgs->map(function($image){
                                            return $image->file->url;
                            });
                            break;
            case 'producto': $product = Product::with('productImg')->find($id);
                            $images = $product->productImg->map(function($image){
                                return $image->file->url;
                            });
                            break;
            case 'usuario': $user = User::with('files.profileImgs')->findOrFail($id);
                            $images = $user->files->where('image_type', '=', 'profile_imgs')->first();

                            break;
        }
        return $images;
    }
}
