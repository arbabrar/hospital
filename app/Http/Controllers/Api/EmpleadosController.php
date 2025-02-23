<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\empleados as Empleado;
use Illuminate\Support\Facades\Validator;

class EmpleadosController extends Controller
{
     /**
     * Muestra el listado de todos los empleados.
     */
    public function index()
    {
        $empleados = Empleado::all();
        return response()->json(['data' => $empleados], 200);
    }

    /**
     * Almacena un nuevo empleado.
     */
    public function store(Request $request)
    {
        // Validamos los datos de entrada
        $validator = Validator::make($request->all(), [
            'persona_id'     => 'required|exists:personas,id',
            'rol'            => 'required|string',
            'fecha_contrato' => 'required|date',
            'fecha_registro' => 'required|date',
            'salario'        => 'required|numeric',
            'puesto'         => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $empleado = Empleado::create($request->all());

        return response()->json(['data' => $empleado], 201);
    }

    /**
     * Muestra la información de un empleado específico.
     */
    public function show($id)
    {
        $empleado = Empleado::find($id);
        if (!$empleado) {
            return response()->json(['message' => 'Empleado no encontrado'], 404);
        }
        return response()->json(['data' => $empleado], 200);
    }

    /**
     * Actualiza la información de un empleado.
     */
    public function update(Request $request, $id)
    {
        $empleado = Empleado::find($id);
        if (!$empleado) {
            return response()->json(['message' => 'Empleado no encontrado'], 404);
        }

        $validator = Validator::make($request->all(), [
            'persona_id'     => 'sometimes|required|exists:personas,id',
            'rol'            => 'sometimes|required|string',
            'fecha_contrato' => 'sometimes|required|date',
            'fecha_registro' => 'sometimes|required|date',
            'salario'        => 'sometimes|required|numeric',
            'puesto'         => 'sometimes|required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $empleado->update($request->all());

        return response()->json(['data' => $empleado], 200);
    }

    /**
     * Elimina un empleado.
     */
    public function destroy($id)
    {
        $empleado = Empleado::find($id);
        if (!$empleado) {
            return response()->json(['message' => 'Empleado no encontrado'], 404);
        }

        $empleado->delete();
        return response()->json(['message' => 'Empleado eliminado con éxito'], 200);
    }
}
