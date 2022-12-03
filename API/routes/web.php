<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('welcome');
});

Route::resource('/direccion', 'AddressController');
Route::resource('/ciudad', 'TownController');
Route::resource('/provincia', 'StateController');
Route::resource('/documento', 'DocumentController');
Route::resource('/archivo', 'FileController');
Route::resource('/tienda', 'StoreController');
Route::resource('/producto', 'ProductController');
Route::resource('/unidad', 'UnitController');
Route::resource('/marca', 'BrandController');
Route::resource('/categoria', 'CategoryController');
Route::resource('/etiqueta', 'TagController');
Route::get('/provincia/ciudades/{id}', 'StateController@getTowns');

