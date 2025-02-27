<?php

use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;

// $role = Role::create(['name'=> 'administrador']);
// $role = Role::create(['name'=> 'empleado']);
 
Route::get('{any}', function () {
    return view('welcome');
})->where('any','.*');
