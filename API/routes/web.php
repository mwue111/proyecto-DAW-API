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

Route::resource('/tienda', 'StoreController');
Route::resource('/horario', 'ScheduleController');
Route::resource('/producto', 'ProductController');
Route::resource('/unidad', 'UnitController');
Route::resource('/marca', 'BrandController');
Route::resource('/categoria', 'CategoryController');
Route::get('/categoria/hijos/{id}', 'CategoryController@getChildren');
Route::resource('/etiqueta', 'TagController');
Route::resource('/franja_horaria', 'TimeSlotController');
Route::get('/franja_horaria/dias/{id}', 'TimeSlotController@getSchedules');
