<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ventas extends Model
{
    use HasFactory;
    
    protected $fillable = ['paciente_id', 'fecha_venta'];

    public function paciente()
    {
        return $this->belongsTo(Pacientes::class, 'paciente_id');
    }
    
    public function detallesVenta()
    {
        return $this->hasMany(DetalleVenta::class, 'venta_id');
    }
}
