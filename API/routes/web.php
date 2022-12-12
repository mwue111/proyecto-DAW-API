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

//producto y tienda
Route::get('/producto/tiendas/{id}', 'ProductController@getStores');
Route::get('/tienda/productos/{id}', 'StoreController@getProducts');
Route::post('/tienda/productos/{id}', 'StoreController@addProducts');
Route::patch('/tienda/productos/{id}', 'StoreController@updateProducts');
Route::delete('/tienda/productos/{id}', 'StoreController@deleteProducts');

// producto y etiquetas
Route::get('/producto/etiquetas/{id}', 'ProductController@getTags');
Route::patch('/producto/etiquetas/{id}', 'ProductController@updateTags');
Route::delete('/producto/etiquetas/{id}', 'ProductController@removeTags');

//producto y ofertas
Route::get('/producto/ofertas/{id}', 'ProductController@getSales');

//tienda y ofertas
Route::get('/tienda/ofertas/{id}', 'StoreController@getSales');

//producto y categorias
Route::get('/producto/categorias/{id}', 'ProductController@getCategories');

Route::resource('/oferta', 'SaleController');
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
//Route::get('tienda/horario/{id}', 'StoreController@getStores');
//Route::post('/tienda/horario', 'StoreController@createSchedules');
Route::put('/tienda/editar_horario/{id}', 'StoreController@setSchedule');
Route::delete('/tienda/borrar_horario/{id}', 'StoreController@deleteSchedule');
//Route::get('tienda/dias-especiales/{id}', 'StoreController@getSpecialDays');
//Route::post('/tienda/dias-especiales', 'StoreController@createSpecialDay');
Route::put('/tienda/dias_especiales/{id}', 'StoreController@setSpecialDay');
Route::delete('/tienda/borrar_dia_especial/{id}', 'StoreController@deleteSpecialDay');
Route::resource('/usuario', 'UserController');
Route::resource('/cliente', 'ClientController');

Route::resource('/files', 'FileController');