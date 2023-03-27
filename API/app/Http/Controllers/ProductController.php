<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Brand;
use App\Models\Category;
use App\Models\ProductImg;
use DB;
use DateTime;
use DateTimeZone;
use DateInterval;

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
            $producto->brand;
            $producto->tags;
            $producto->stores;
            $producto->sales;
            $producto->category;
            $producto->productImg->each(function($url){
                $url->file;
            });
        }
        return $data['productos'];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
{
    $product = new Product();
    $product->name = $request->input('name');
    $product->description = $request->input('description');
    $product->category_id = $request->input('category_id');
    $product->save();

    if ($request->has('tags')) {
        $tags = json_decode($request->input('tags'));
        $tags = collect($tags)->mapWithKeys(function ($tag) {
            return [$tag => ['created_at' => now(), 'updated_at' => now()]];
        })->toArray();
        $product->tags()->sync($tags);
    }

    $stores = json_decode($request->input('stores'));
        $product->stores()->attach($stores, [
            'stock' => $request->input('stock'),
            'value' => $request->input('value'),
            'unit' => $request->input('unit'),
            'remarks' => $request->input('remarks')
        ]);

    return response()->json($request);
}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        $product->brand;
        $product->tags;
        $product->stores;
        $product->sales;
        $product->category;
        $product->productImg->each(function($image){
            $image->file;
        });
        return $product;
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

        if(isset($request->category)){

            $categoryId = DB::table("categories")
                            ->select('id')
                            ->where("name", $request->category)
                            ->first()->id;
            $category = Category::find($categoryId);
            $product->category_id = $category->id;
        }

        if(isset($request->brand)){
            $brandId = DB::table("brands")
                        ->select('id')
                        ->where("name", $request->brand)
                        ->first()
                        ->id;

            $brand = Brand::find($brandId);
            $product->brand_id = $brand->id;
        }

        if(isset($request->tags)){
            $product->tags()->sync($request->tags);
            $product->save();
        }

        $product->stores()->sync($request->stores);

        $product->update($request->all());
        $product->save();
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

    public function getNames(){
        return Product::select('name', 'id')->get();
    }

    public function deleteOldProducts(Request $request){

        $date = new DateTime('now', new DateTimeZone('Europe/Madrid'));
        $date->sub(DateInterval::createFromDateString($request->data . ' months'));
        $test = $date->format('Y-m-d H:i:s');

        $oldProducts = Product::where('updated_at', '<', $test)->where('deleted', '=', '1')->get();

        foreach($oldProducts as $oldProduct){
            $oldProduct->brand;
            $oldProduct->stores;
            $oldProduct->sales;
            $oldProduct->category;
            $oldProduct->productImg->each(function ($url) {
                $url->file;
            });
        }
        return $oldProducts;
    }

    public function findProductName ($product){
        $product = Product::where('name', $product)->first();
        return $product->id;
    }
}
