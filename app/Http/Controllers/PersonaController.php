<?php

namespace App\Http\Controllers;

use App\Models\personas as Persona;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PersonaController extends Controller
{
    /**
     * Muestra el listado de todas las personas.
     */
    public function index()
    {
        $personas = Persona::all();
        return response()->json(['data' => $personas], 200);
    }

    /**
     * Almacena una nueva persona.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre'           => 'required|string|max:100',
            'apaterno'         => 'nullable|string|max:100',
            'amaterno'         => 'nullable|string|max:100',
            'nrodocumento'     => 'required|string|max:20|unique:personas,nrodocumento',
            'email'            => 'nullable|email|max:150|unique:personas,email',
            'telefono'         => 'nullable|string|max:20',
            'domicilio'        => 'nullable|string|max:255',
            'fecha_nacimiento' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $persona = Persona::create($request->all());
        return response()->json(['data' => $persona], 201);
    }

    /**
     * Muestra una persona en particular.
     */
    public function show($id)
    {
        $persona = Persona::find($id);
        if (!$persona) {
            return response()->json(['message' => 'No se encontró la persona'], 404);
        }
        return response()->json(['data' => $persona], 200);
    }

    /**
     * Actualiza la información de una persona.
     */
    public function update(Request $request, $id)
    {
        $persona = Persona::find($id);
        if (!$persona) {
            return response()->json(['message' => 'No se encontró la persona'], 404);
        }

        $validator = Validator::make($request->all(), [
            'nombre'           => 'sometimes|required|string|max:100',
            'apaterno'         => 'sometimes|nullable|string|max:100',
            'amaterno'         => 'sometimes|nullable|string|max:100',
            'nrodocumento'     => 'sometimes|required|string|max:20|unique:personas,nrodocumento,' . $id,
            'email'            => 'sometimes|nullable|email|max:150|unique:personas,email,' . $id,
            'telefono'         => 'sometimes|nullable|string|max:20',
            'domicilio'        => 'sometimes|nullable|string|max:255',
            'fecha_nacimiento' => 'sometimes|required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $persona->update($request->all());
        return response()->json(['data' => $persona], 200);
    }

    /**
     * Elimina una persona.
     */
    public function destroy($id)
    {
        $persona = Persona::find($id);
        if (!$persona) {
            return response()->json(['message' => 'No se encontró la persona'], 404);
        }

        $persona->delete();
        return response()->json(['message' => 'Persona eliminada con éxito'], 200);
    }
}
