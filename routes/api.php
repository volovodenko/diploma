<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');
Route::post('validateEmail', 'API\UserController@validateEmail');
Route::post('details', 'API\UserController@details')->middleware('auth:api');


Route::get('getMenu', 'MenuController@getMenu');


Route::get('getCars', 'CarController@getCars');
Route::post('getCarModels', 'CarController@getCarModelsByCarSlug');
Route::post('getCarCategories', 'CarController@getCarCategoriesByCarModelSlug');


Route::get('getProductList/{carModelSlug}', 'ProductController@getProductList');
Route::get('getProductItem/{partSlug}', 'ProductController@getProductItem');




//Route::get('catalog/to', 'MenuController@test1');
//Route::get('catalog/{man}', 'MenuController@test2');

Route::any('/{catchAll}', function () {
    return response()->json(['message' => 'API: Not Found!'], 404);
})->where('catchAll', '^.*$');