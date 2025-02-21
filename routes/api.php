<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\AuthController;

Route::prefix('v1')->group(function(){
    //rutas publicas
    Route::get('/public/{slug}',[ApiController::class,'categorias']);
    //rutas de autenticacion
    Route::get('/auth/register',[AuthController::class,'register']);
    Route::get('/auth/login',[AuthController::class,'login']);
    
    //rutas privadas

    Route::group(['middleware'=>'auth:sanctum'], function () {
        Route::post('/auth/logout',[AuthController::class,'logout']);
        //::rol admin

        //::rol empleado

    });




});