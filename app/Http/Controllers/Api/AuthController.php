<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\empleados;

class AuthController extends Controller
{
    public function register(Request $request)
    {
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
    public function login(Request $request)
    {
        // Validación de los datos entrantes
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Intentamos autenticar al usuario usando el email y password
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }

        // Obtenemos el usuario autenticado
        $user = Auth::user();

        // Obtenemos el rol utilizando Laravel Permission
        $role = $user->getRoleNames()->first();

        // Creamos un token de autenticación usando Laravel Sanctum
        $token = $user->createToken('UPDSSistemasIII')->plainTextToken;

        // Retornamos la respuesta con la información del usuario, rol y token
        return response()->json([
            'message' => 'Usuario autenticado exitosamente',
            'user'    => [
                'id'    => $user->id,
                'name'  => $user->name,
                'email' => $user->email,
                'role'  => $role,
            ],
            'token'   => $token,
        ], 200);
    }
    public function logout(Request $request)
    {
        // Revocamos el token actual del usuario
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Cierre de sesion exitoso'], 200);
    }
}
