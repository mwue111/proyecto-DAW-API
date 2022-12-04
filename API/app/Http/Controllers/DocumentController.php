<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    public function index(){
        $documentsList = Document::all();
        return $documentsList;
    }

    public function store(Request $request){
        Document::create($request->all());
    }

    public function show($id){
        return Document::find($id);
    }

    public function update(Request $request, $id){
        $document = Document::find($id);
        $document->update($request->all());
    }

    public function destroy($id){
        return Document::destroy($id);
    }
}