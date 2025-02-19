<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class historiaClinica extends Model
{
    use HasFactory;
    
    protected $fillable = ['paciente_id', 'fecha_consulta', 'empleado_id', 'descripcion'];

    public function paciente()
    {
        return $this->belongsTo(Pacientes::class, 'paciente_id');
    }

    public function empleado()
    {
        return $this->belongsTo(Empleados::class, 'empleado_id');
    }
}
