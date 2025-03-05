<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DetalleVenta extends Model
{
    use HasFactory;
    
    // Este modelo representa los detalles de una venta
    protected $fillable = ['item_id', 'venta_id', 'cantidad', 'precio_unitario', 'total', 'empleado_id'];

    public function venta()
    {
        // Relación con el modelo Venta
        return $this->belongsTo(ventas::class, 'venta_id');
    }
    
    public function empleado()
    {
        // Relación con el modelo Empleado
        return $this->belongsTo(empleados::class, 'empleado_id');
    }
}
