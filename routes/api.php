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
Route::post('validateName', 'API\UserController@validateName');
Route::post('validateEmail', 'API\UserController@validateEmail');
Route::post('details', 'API\UserController@details')->middleware('auth:api');


Route::get('getMenu', 'MenuController@getMenu');


Route::get('getCars', 'CarController@getCars');
Route::post('getCarModels', 'CarController@getCarModelsByCarSlug');
Route::post('getCarCategories', 'CarController@getCarCategoriesByCarModelSlug');


Route::get('getProductList/{carModelSlug}', 'ProductController@getProductList');
Route::get('getProductItem/{partSlug}', 'ProductController@getProductItem');


Route::get('getTransporters', 'TransporterController@getTransporters');
Route::post('transporter/getCities', 'TransporterController@getCities');
Route::post('transporter/getWarehouses', 'TransporterController@getWarehouses');


Route::get('getPayments', 'PaymentController@getPayments');
Route::get('getDeliveryMethods', 'DeliveryMethodController@getDeliveryMethods');


Route::post('saveOrder', 'OrderController@saveOrder')->middleware('user:api');


Route::post('saveComment', 'CommentController@saveComment')->middleware('auth:api');
Route::get('getComments/{productId}', 'CommentController@getComments')->middleware('user:api');


Route::post('saveVote', 'VoteController@saveVote')->middleware('auth:api');


Route::get('getPageContent/{page}', 'PageContentController@getPageContent');


Route::any('/{catchAll}', function () {
    return response()->json(['message' => 'API: Not Found!'], 404);
})->where('catchAll', '^.*$');