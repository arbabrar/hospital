<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class medicamento extends Model
{
    use HasFactory;
    
    protected $fillable = ['descripcion', 'stock', 'fecha_registro', 'nombre', 'categoria_id', 'precio_compra', 'precio_venta', 'fecha_vencimiento'];

    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }
}
