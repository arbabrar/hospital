<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class pacientes extends Model
{
    use HasFactory;
    
    protected $fillable = ['persona_id', 'asegurado'];

    public function ventas()
    {
        return $this->hasMany(ventas::class, 'paciente_id');
    }
    
    public function historiasClinicas()
    {
        return $this->hasMany(historiaClinica::class, 'paciente_id');
    }
}
