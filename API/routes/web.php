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
Route::get('/ciudad/calles/{id}', 'TownController@getAddress');
Route::resource('/provincia', 'StateController');
Route::get('/provincia/ciudades/{id}', 'StateController@getTowns');
Route::resource('/documento', 'DocumentController');
Route::resource('/archivo', 'FileController');
Route::resource('/tienda', 'StoreController');
Route::resource('/horario', 'ScheduleController');
Route::resource('/producto', 'ProductController');
Route::get('/producto/etiquetas/{id}', 'ProductController@getTags');
Route::resource('/unidad', 'UnitController');
Route::get('/marca/productos/{id}', 'BrandController@getProducts');
Route::resource('/marca', 'BrandController');
Route::resource('/categoria', 'CategoryController');
Route::get('/categoria/hijos/{id}', 'CategoryController@getChildren');
Route::resource('/etiqueta', 'TagController');
Route::get('/etiqueta/productos/{id}', 'TagController@getProducts');
Route::resource('/franja_horaria', 'TimeSlotController');
Route::get('/franja_horaria/dias/{id}', 'TimeSlotController@getSchedules');
Route::resource('/dia_especial', 'SpecialDayController');
