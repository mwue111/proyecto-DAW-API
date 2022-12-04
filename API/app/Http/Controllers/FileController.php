<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function index(){
        $filesList = File::all();
        return $filesList;
    }

    public function store(Request $request){
        File::create($request->all());
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
