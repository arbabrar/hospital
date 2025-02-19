<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class personas extends Model
{
    use HasFactory;
    
    protected $fillable = ['nombre', 'apaterno', 'amaterno', 'nrodocumento', 'email', 'telefono', 'domicilio', 'fecha_nacimiento'];

    public function empleados()
    {
        return $this->hasMany(empleados::class, 'persona_id');
    }

    public function pacientes()
    {
        return $this->hasMany(pacientes::class, 'persona_id');
    }
}
