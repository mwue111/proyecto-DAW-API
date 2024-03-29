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
Route::get('/tienda/encontrar/{id}', 'StoreController@getStoreByUser');
Route::post('/tienda/productoexistente', 'StoreController@productoExistente');
Route::delete('/tienda/productoexistente', 'StoreController@deleteProduct')->name('store.product.delete');
Route::get('/default-store', 'StoreController@getDefaultStore');
Route::get('/producto/encuentra/{name}', 'ProductController@findProductName');
Route::get('/usuario/encuentra/{username}', 'UserController@findUsername');
Route::get('/tienda/nombre', 'StoreController@getNames');
Route::get('/producto/nombre', 'ProductController@getNames');
Route::post('/tienda/borrar', 'StoreController@deleteOldStores');
Route::post('/producto/borrar', 'ProductController@deleteOldProducts');
Route::post('/usuario/borrar', 'UserController@deleteOldUsers');

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});
Route::resource('/direccion', 'AddressController');
Route::resource('/ciudad', 'TownController');
Route::get('/ciudad/calles/{id}', 'TownController@getAddress');
Route::resource('/provincia', 'StateController');
Route::get('/provincia/ciudades/{id}', 'StateController@getTowns');
//Route::resource('/documento', 'DocumentController');
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

//Usuarios:
Route::resource('/usuario', 'UserController');
Route::resource('/cliente', 'ClientController');
Route::resource('/propietario', 'OwnerController');
Route::resource('/admin', 'AdministratorController');

//Archivos (File):
Route::resource('/subir-archivo', 'FileController');
require __DIR__.'/auth.php';

//Obtener imágenes:
Route::get('/imagenes/{table}/{id}', 'FileController@getImages');

//Comentarios:
Route::post('/comentario', 'App\Http\Controllers\CommentController@store');
Route::get('/comentario/random', 'App\Http\Controllers\CommentController@getRandomComments');
Route::get('/comentario/{id}', 'App\Http\Controllers\CommentController@show');
Route::put('/comentario/{id}', 'CommentController@update');
Route::delete('/comentario/{id}', 'CommentController@destroy');
Route::get('/comentario', 'App\Http\Controllers\CommentController@getAllComments');

//Obtener avatar:
Route::get('borrar/avatar/usuario/{id}', 'FileController@deleteAvatar');
