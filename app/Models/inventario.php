<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class inventario extends Model
{
    use HasFactory;
    
    protected $fillable = ['medicamento_id', 'cantidad', 'fecha_ingreso'];

    public function medicamento()
    {
        return $this->belongsTo(Medicamento::class, 'medicamento_id');
    }
}
