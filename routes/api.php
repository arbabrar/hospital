<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoriaController;
use App\Http\Controllers\Api\EmpleadosController;
use App\Http\Controllers\Api\InventarioController;
use App\Http\Controllers\Api\MedicamentoController;
use App\Http\Controllers\PersonaController;

Route::prefix('v1')->group(function(){
    //rutas publicas
    Route::get('/public/{slug}',[ApiController::class,'categorias']);

    Route::post('/admin/empleados', [EmpleadosController::class,'store']);
    Route::post('/admin/persona',[PersonaController::class,'store']);
    //rutas de autenticacion
    Route::post('/auth/register',[AuthController::class,'register']);
    Route::post('/auth/login',[AuthController::class,'login']);
    
    //rutas privadas

    Route::group(['middleware'=>'auth:sanctum'], function () {
        Route::post('/auth/logout',[AuthController::class,'logout']);
        //::rol admin
        Route::apiResource('/admin/categoria', CategoriaController::class);
        Route::apiResource('/admin/inventario', InventarioController::class);
        Route::apiResource('/admin/medicamento',MedicamentoController::class);
        
        Route::get('/auth/register',[AuthController::class,'register']);
        //::rol empleado

    });




});