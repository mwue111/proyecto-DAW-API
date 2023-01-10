<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use App\Models\Document;
use App\Models\ProfileImg;
use App\Models\StoreImg;
use App\Models\Store;
use App\Models\ProductImg;
use App\Models\Product;
//Ir añadiendo los modelos que correspondan

class FileController extends Controller
{
    public function index(){
        $files = File::all();
        foreach($files as $file){
            switch($file->type){
                case 'document': $file->document; break;
                case 'profile_imgs': $file->profileImgs; break; //llamada a la función en File.php
                case 'store_imgs': $file->storeImgs; break;
                case 'product_imgs': $file->productImgs; break;

                //cambiar nombres a xxx_imgs en lugar de xxx_img
                case 'brands_img': $file->brands_img; break;
                //case 'logo': $file->logo;break;
            }
        }
        return $files;
    }

    public function store(Request $request){
        $file = File::create($request->all());

        switch($file->type){
            case 'document': $document = new Document();
                            $document->file_id = $file->id;
                            //$document->expiration_date = date('Y-m-d H:i:s');
                            $document->expiration_date = $request->expiration_date;
                            $document->save(); break;

            case 'profile_imgs': $profile = new ProfileImg();
                                $profile->file_id = $file->id;
                                $profile->save(); break;

            case 'store_imgs': $store = new StoreImg();
                            $store->file_id = $file->id;
                            
                            $storeId = Store::find($request->store_id);
                            $store->store_id = $storeId->id;                            
                            $store->save(); break;

            case 'product_imgs': $product = new ProductImg();
                                $product->file_id = $file->id;

                                $productId = Product::find($request->product_id);
                                $product->product_id = $productId->id;
                                $product->save(); break;
            //ir editando las siguientes tablas - no requieren controlador
            /*
            case 'brands_img': $file->brands_img; break;
            case 'logo': $file->logo;break;
            */
        }
    }

    public function show($id){
        return File::find($id);
    }

    public function update(Request $request, $id){
        $file = File::find($id);
        
        $file->update($request->all()); //para modificar el campo type dentro de un file concreto
        
        switch($file->type){
            case 'document': $document = Document::find($id);
                             $document->update($request->all()); break;

            case 'profile_imgs': $profile = ProfileImg::find($id);
                                $profile->update($request->all()); break;

            case 'store_imgs': $store = StoreImg::find($id);
                                $store->update($request->all()); break;

            case 'product_imgs': $product = ProductImg::find($id);
                                $product->update($request->all()); break;
            
            //ir editando las siguientes tablas
            /*
            case 'brands_img': $file->brands_img; break;
            case 'logo': $file->logo;break;
            */
        }
        
        $file->deleted = $request->deleted;
        $file->save();
    }

    public function destroy($id){
        return File::destroy($id);
    }
}
