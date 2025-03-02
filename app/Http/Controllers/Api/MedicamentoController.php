<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\medicamento as Medicamento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MedicamentoController extends Controller
{
    /**
     * Muestra el listado de todos los medicamentos.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $medicamentos = Medicamento::all();
        return response()->json(['data' => $medicamentos], 200);
    }

    /**
     * Almacena un nuevo medicamento.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'descripcion'     => 'required|string|max:255',
            'stock'           => 'required|numeric',
            'fecha_registro'  => 'required|date',
            'nombre'          => 'required|string|max:255',
            'categoria_id'    => 'required|integer|exists:categorias,id',
            'precio_compra'   => 'required|numeric',
            'precio_venta'    => 'required|numeric',
            'fecha_vencimiento' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $medicamento = Medicamento::create($request->all());

        return response()->json(['data' => $medicamento], 201);
    }

    /**
     * Muestra la información de un medicamento específico.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $medicamento = Medicamento::find($id);
        if (!$medicamento) {
            return response()->json(['message' => 'Medicamento no encontrado'], 404);
        }
        return response()->json(['data' => $medicamento], 200);
    }

    /**
     * Actualiza la información de un medicamento.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $medicamento = Medicamento::find($id);
        if (!$medicamento) {
            return response()->json(['message' => 'Medicamento no encontrado'], 404);
        }

        $validator = Validator::make($request->all(), [
            'descripcion'     => 'sometimes|required|string|max:255',
            'stock'           => 'sometimes|required|numeric',
            'fecha_registro'  => 'sometimes|required|date',
            'nombre'          => 'sometimes|required|string|max:255',
            'categoria_id'    => 'sometimes|required|integer|exists:categorias,id',
            'precio_compra'   => 'sometimes|required|numeric',
            'precio_venta'    => 'sometimes|required|numeric',
            'fecha_vencimiento' => 'sometimes|required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $medicamento->update($request->all());

        return response()->json(['data' => $medicamento], 200);
    }

    /**
     * Elimina un medicamento.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $medicamento = Medicamento::find($id);
        if (!$medicamento) {
            return response()->json(['message' => 'Medicamento no encontrado'], 404);
        }

        $medicamento->delete();

        return response()->json(['message' => 'Medicamento eliminado con éxito'], 200);
    }
}
