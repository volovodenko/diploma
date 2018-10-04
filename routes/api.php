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

//UserController
Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');
Route::post('validateName', 'API\UserController@validateName');
Route::post('validateEmail', 'API\UserController@validateEmail');
Route::post('details', 'API\UserController@details')->middleware('auth:api');
Route::post('saveUserData', 'API\UserController@saveUserData')->middleware('auth:api');


//MenuController
Route::get('getMenu', 'MenuController@getMenu');


//CarController
Route::get('getCars', 'CarController@getCars');
Route::post('getCarModels', 'CarController@getCarModelsByCarSlug');
Route::post('getCarCategories', 'CarController@getCarCategoriesByCarModelSlug');


//ProductController
Route::get('getProductList/{carModelSlug}', 'ProductController@getProductList');
Route::get('getProductItem/{partSlug}', 'ProductController@getProductItem');
Route::post('addToFavorites', 'ProductController@addToFavorites')->middleware('auth:api');
Route::get('getFavorites', 'ProductController@getFavorites')->middleware('auth:api');
Route::get('deleteFromFavorites/{productId}', 'ProductController@deleteFromFavorites')
    ->where('productId', '[0-9]+')
    ->middleware('auth:api');


//TransporterController
Route::get('getTransporters', 'TransporterController@getTransporters');
Route::post('transporter/getCities', 'TransporterController@getCities');
Route::post('transporter/getWarehouses', 'TransporterController@getWarehouses');
Route::get('getDeliveryMethods', 'TransporterController@getDeliveryMethods');


//PaymentController
Route::get('getPayments', 'PaymentController@getPayments');


//OrderController
Route::post('saveOrder', 'OrderController@saveOrder')->middleware('user:api');
Route::get('getOrdersList', 'OrderController@getOrdersList')->middleware('auth:api');
Route::get('getOrder/{orderId}', 'OrderController@getOrder')
    ->where('orderId', '[0-9]+')
    ->middleware('auth:api');



//CommentController
Route::post('saveComment', 'CommentController@saveComment')->middleware('auth:api');
Route::get('getComments/{productId}', 'CommentController@getComments')
    ->where('productId', '[0-9]+')
    ->middleware('user:api');


//VoteController
Route::post('saveVote', 'VoteController@saveVote')->middleware('auth:api');


//PageContentController
Route::get('getPageContent/{page}', 'PageContentController@getPageContent');


//SearchController
Route::post('getSearch', 'SearchController@getSearch');




Route::any('/{catchAll}', function () {
    return response()->json(['message' => 'API: Not Found!'], 404);
})->where('catchAll', '^.*$');