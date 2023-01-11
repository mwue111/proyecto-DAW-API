<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductImg;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['productos'] = Product::all();
        foreach($data['productos'] as $producto){
            $producto->tags;
            $producto->stores;
            $producto->sales;
            $producto->category;
            $producto->productImgs;
        }
        return $data;
        //return view('producto', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = Product::create($request->all());
        $product->tags()->attach($request->tags);
        $product->stores()->attach($request->stores, [
            'stock' => $request->stock, 
            'value' => $request->value,
            'remarks' => $request->remarks
        ]);
        return response()->json($product, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Product::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->update($request->all());
        $product->tags()->sync($request->tags);
        $product->stores()->sync($request->stores);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::destroy($id);
    }

    public function getTags ($id){
        $product = Product::find($id);
        return $product->tags;
    }

    public function getStores($id){
        $product = Product::find($id);
        return $product->stores;
    }

    public function getSales($id){
        $product = Product::find($id);
        return $product->sales;
    }

    public function getCategories($id){
        $product = Product::find($id);
        $category= $product->category;
        $categories = array();
        while($category != null){
            array_push($categories, $category);
            $category = $category->parent;
        }
        return $categories[0];
    }

    public function updateTags($id, Request $request){
        $product = Product::find($id);
        $product->tags()->sync($request->tags);
    }

    public function updateStores($id, Request $request){
        $product = Product::find($id);
        $product->stores()->sync($request->stores);
    }

    public function removeTags($id, Request $request){
        $product = Product::find($id);
        $product->tags()->detach($request->tags);
    }

    public function removeStores($id, Request $request){
        $product = Product::find($id);
        $product->stores()->detach($request->stores);
    }
}
