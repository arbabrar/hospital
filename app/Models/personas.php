<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

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

    public static function getPersonaConEmpleados($id)
    {
        $empleado = DB::table('empleados')
            ->where('persona_id', $id)
            ->first();

        // Retorna los datos del empleado asociado.
        return $empleado;
    }
}
