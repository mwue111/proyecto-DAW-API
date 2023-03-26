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
        //return view('producto', $data);

        /*
        //Lo que yo tenía:
        $products = Product::all();
        foreach($products as $product){
            $product->productImg->each(function($url){
                $url->file;
            });
            $product->brand;
            $product->tags;
            $product->stores;
            $product->sales;
            $product->category;

        //este es el array de imágenes que había en merge:
            $producto->images->each(function($archivo){
                $archivo->file;
            });
        */
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

        if(isset($request->brand)) {
            $brandId = DB::table('brands')->select('id')
                                        ->where('id', $request->brand)
                                        ->first()
                                        ->id;
            $brand = Brand::find($brandId);
            $product->brand_id = $brand->id;
        }

        if(isset($request->category)) {
            $categoryId = DB::table('categories')->select('id')
                                                ->where('id', $request->category)
                                                ->first()
                                                ->id;
            $category = Category::find($categoryId);
            $product->category_id = $category->id;
        }

        if(isset($request->tags)) {
            $product->tags()->sync($request->tags);
            $product->save();
        }

        //Aquí: subida de imágenes en el directorio correspondiente

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
            //hay que mandarle los ids como números, no como objetos
            $product->tags()->sync($request->tags);
            $product->save();
        }

        //*aquí*: ver cómo modificar las imágenes
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
    // funcion para recibir todos los nombres de los productos
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
}
