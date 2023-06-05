<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\File;
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
            //poner los if dentro del switch

            if($request->image_type === 'product_imgs') {
                $name = time() . $request->name;
                $request->file->storeAs('public/images/' . $request->image_type, $name);

            }
            else if($request->image_type === 'profile_imgs'){
                $request->file->storeAs('public/images/' . $request->image_type . '/users/' . $request->username, $request->name);
            }
            else if($request->image_type === 'document'){
                $file = $request->file('file');
                $name = time().$file->getClientOriginalName();
                $file->move(public_path().'/files/'.$request->image_type , $name);
            }

            switch($request->image_type){
                case 'document': $file = File::create([
                                        'user_id' => $request->user_id,
                                        'url' => public_path().'/files/'. $name,
                                        'image_type' => $request->image_type,
                                        'deleted' => false
                                    ]);

                                $document = new Document();
                                $document->file_id = $file->id;
                                $document->expiration_date = \Carbon\Carbon::now()->addYears(2);
                                $document->save();
                                break;

                case 'profile_imgs':
                                    $name = $request->name;
                                    $file = File::create([
                                        'user_id' => $request->user_id,
                                        'url' => '/storage/images/' . $request->image_type . '/users/' . $request->username .'/'. $name,
                                        'image_type' => $request->image_type,
                                        'deleted' => 0
                                    ]);
                                    $profile = new ProfileImg();
                                    $profile->file_id = $file->id;

                                    //Si ya existe en la tabla file un campo con el user_id y una profile_imgs, que lo borre
                                    $old_profile = File::where('user_id', '=', $request->user_id)->where('image_type', '=', 'profile_imgs')
                                                                                                ->orderBy('id', 'desc')
                                                                                                ->skip(1)
                                                                                                ->take(1)
                                                                                                ->first();

                                    if($old_profile){
                                        $path = str_replace('/storage/', '/public/', $old_profile->url);
                                        Storage::delete($path);
                                        $old_profile->delete();
                                    }
                                    $profile->save(); break;

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
        $file = File::find($id);

        $file->update($request->all());

        switch($file->type){
            case 'document': $document = Document::find($id);
                             $document->update($request->all()); break;

            case 'profile_imgs': $profile = ProfileImg::find($id);
                                $profile->update($request->all()); break;

            case 'store_imgs': $store = StoreImg::find($id);
                                $store->update($request->all()); break;

            case 'product_imgs': $product = ProductImg::find($id);
                                $product->update($request->all()); break;

            case 'brand_imgs': $brand = BrandImg::find($id);
                                $brand->update($request->all()); break;
        }

        $file->deleted = $request->deleted;
        $file->save();
    }

    public function destroy($id){
        $file = File::findOrFail($id);
        $url = $file->url;
        $url = str_replace('storage', 'public', $file->url);
        // Storage::delete($url);   //comentado para que no borre del servidor mientras se prueba
        return $file->delete();
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
            case 'usuario': echo 'ok'; break;
        }

        return $images;
    }
}
