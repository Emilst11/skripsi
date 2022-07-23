<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


// Route::get('test', 'JwtAuthController@test');
// Route::post('login', 'JwtAuthController@login');
// Route::post('register', 'JwtAuthController@register');
  
// Route::group(['middleware' => 'auth.jwt'], function () {
//     Route::get('logout', 'JwtAuthController@logout');
//     Route::get('user-info', 'JwtAuthController@getUser');
// });

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('register', 'AuthController@register');
    Route::post('record/store', 'RecordController@store');
    Route::get('record/get-all', 'RecordController@get_all');
});