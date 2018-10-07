<?php

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



Route::get('/dashboard/login', [
    "as" => "login",
    function () {
        return view('login');
    }
]);
Route::post('/dashboard/login', 'DashboardController@login');
Route::any('/dashboard/logout', 'DashboardController@logout');
Route::any('/dashboard', ["as" => "dashboard", "uses" => "DashboardController@getDashboard"]);
Route::any('/dashboard/{catchAll}', function () {
    return redirect()->route("dashboard");
})->where('catchAll', '^.*$');


Route::any('/{catchAll}', function () {
    return view('index');
})->where('catchAll', '^.*$');