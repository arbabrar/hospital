<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\personas as Persona;

class empleados extends Model
{
    use HasFactory;
    
    protected $fillable = ['persona_id', 'rol', 'fecha_contrato', 'fecha_registro', 'salario', 'puesto'];

    public function detallesVenta()
    {
        return $this->hasMany(DetalleVenta::class, 'empleado_id');
    }

    public static function getDatosPersona(int $idPersona): Persona
    {
        return Persona::findOrFail($idPersona);
    }
}
