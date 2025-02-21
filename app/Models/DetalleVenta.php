<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DetalleVenta extends Model
{
    use HasFactory;
    
    protected $fillable = ['item_id', 'venta_id', 'cantidad', 'precio_unitario', 'total', 'empleado_id'];

    public function venta()
    {
        return $this->belongsTo(ventas::class, 'venta_id');
    }
    
    public function empleado()
    {
        return $this->belongsTo(empleados::class, 'empleado_id');
    }
}
