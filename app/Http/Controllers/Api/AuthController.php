<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\empleados;

class AuthController extends Controller{
    public function register(Request $request){
        // Validación de datos entrantes
        $validator = Validator::make($request->all(), [
            'empleado_id' => 'required|exists:empleados,id',
            'password'    => 'required|string|min:6',
            'role'        => 'required|in:admin,empleado,transcriptor',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Se busca el empleado relacionado
        $empleado = empleados::find($request->empleado_id);
        if (!$empleado) {
            return response()->json(['error' => 'Empleado no encontrado'], 404);
        }

      

        $persona = empleados::getDatosPersona($empleado->persona_id);

          // Opcional: validar que el empleado tenga email
          if (!$persona->email) {
            return response()->json(['error' => 'Este funvionario no tiene un email asociado'], 422);
        }

        // Se crea el usuario utilizando el nombre compuesto del empleado
        $user = User::create([
            'empleado_id' => $request->empleado_id,
            'name'        => trim($persona->nombre . ' ' . $persona->apaterno . ' ' . $persona->amaterno),
            'email'       => $persona->email,
            'password'    => bcrypt($request->password),
        ]);

        // Se asigna el rol al usuario
        $user->assignRole($request->role);

        // Se crea un token de autenticación (por ejemplo, usando Laravel Sanctum)
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'mensaje' => 'Usuario creado correctamente',
            'user'    => $user,
            'token'   => $token,
        ], 201);
    }
}