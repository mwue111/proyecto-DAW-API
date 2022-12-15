<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use App\Models\Document;
//Ir añadiendo los modelos que correspondan

class FileController extends Controller
{
    public function index(){
        $files = File::all();
        foreach($files as $file){
            switch($files->type){
                case 'document': $file->document; break;
                case 'stores_img': $file->stores_img; break;
                case 'products_img': $file->products_img; break;
                case 'profiles_img': $file->profiles_img; break;
                case 'brands_img': $file->brands_img; break;
            }
        }
        return $files;
    }

    public function store(Request $request){
        $file = File::create($request->all());

        switch($file->type){
            case 'document': $document = new Document();
                            $document->file_id = $file->id;
                            $document->expiration_date = date('Y-m-d H:i:s');
                            $document->save(); break;
            case 'stores_img': $file->stores_img; break;
            case 'products_img': $file->products_img; break;
            case 'profiles_img': $file->profiles_img; break;
            case 'brands_img': $file->brands_img; break;
        }
    }

    public function show($id){
        return File::find($id);
    }

    public function update(Request $request, $id){
        $file = File::find($id);
        $file->update($request->all());
    }

    public function destroy($id){
        return File::destroy($id);
    }
}
