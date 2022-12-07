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
Route::resource('/unidad', 'UnitController');
Route::resource('/marca', 'BrandController');
Route::resource('/categoria', 'CategoryController');
Route::get('/categoria/hijos/{id}', 'CategoryController@getChildren');
Route::resource('/etiqueta', 'TagController');
Route::resource('/franja-horaria', 'TimeSlotController');
Route::get('/franja_horaria/dias/{id}', 'TimeSlotController@getSchedules');
Route::resource('/dia-especial', 'SpecialDayController');
//Route::get('tienda/horario/{id}', 'StoreController@getStores');
//Route::post('/tienda/horario', 'StoreController@createSchedules');
Route::put('/tienda/editar-horario/{id}', 'StoreController@setSchedule');
Route::delete('/tienda/borrar-horario/{id}', 'StoreController@deleteSchedule');
//Route::get('tienda/dias-especiales/{id}', 'StoreController@getSpecialDays');
//Route::post('/tienda/dias-especiales', 'StoreController@createSpecialDay');
Route::put('/tienda/dias-especiales/{id}', 'StoreController@setSpecialDay');
Route::delete('/tienda/borrar-dia-especial/{id}', 'StoreController@deleteSpecialDay');
