<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\categoria as Categoria;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class CategoriaController extends Controller
{
    /**
     * Muestra el listado de categorías.
     */
    public function index()
    {
        $categorias = Categoria::all();
        return response()->json(['data' => $categorias], 200);
    }

    /**
     * Almacena una nueva categoría.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            // Agrega otras validaciones según tu modelo, por ejemplo:
            // 'descripcion' => 'nullable|string|max:500'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $categoria = Categoria::create($request->all());

        return response()->json(['data' => $categoria], 201);
    }

    /**
     * Muestra una categoría específica.
     */
    public function show($id)
    {
        $categoria = Categoria::find($id);
        if (!$categoria) {
            return response()->json(['message' => 'Categoría no encontrada'], 404);
        }
        return response()->json(['data' => $categoria], 200);
    }

    /**
     * Actualiza una categoría.
     */
    public function update(Request $request, $id)
    {
        $categoria = Categoria::find($id);
        if (!$categoria) {
            return response()->json(['message' => 'Categoría no encontrada'], 404);
        }

        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|max:255',
            // Agrega otras validaciones según tu modelo
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $categoria->update($request->all());

        return response()->json(['data' => $categoria], 200);
    }

    /**
     * Elimina una categoría.
     */
    public function destroy($id)
    {
        $categoria = Categoria::find($id);
        if (!$categoria) {
            return response()->json(['message' => 'Categoría no encontrada'], 404);
        }

        $categoria->delete();

        return response()->json(['message' => 'Categoría eliminada con éxito'], 200);
    }

    public function searchDescription($data) {
        $categoria =DB::table('categorias')->where('descripcion','like','%'.$data.'%')->get();

        return response()->json(['data' => $categoria], 200);
    }
}
