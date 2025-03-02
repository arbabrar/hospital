<?php

// Define el namespace de la clase, que es App\Models
namespace App\Models;

// Importa la clase Model del paquete Illuminate\Database\Eloquent
// Esta clase es la base para todos los modelos de Eloquent en Laravel
use Illuminate\Database\Eloquent\Model;

// Importa la clase HasFactory del paquete Illuminate\Database\Eloquent\Factories
// Esta clase proporciona una forma de crear factories para los modelos de Eloquent
use Illuminate\Database\Eloquent\Factories\HasFactory;

// Define la clase inventario que hereda de la clase Model
class inventario extends Model
{
    // Utiliza la clase HasFactory para proporcionar una forma de crear factories para el modelo
    use HasFactory;
    
    // Define los campos que se pueden rellenar mediante la asignación masiva de atributos
    // En este caso, los campos son medicamento_id, cantidad y fecha_ingreso
    protected $fillable = ['medicamento_id', 'cantidad', 'fecha_ingreso','precio_venta'];

    // Define una relación entre el modelo inventario y el modelo Medicamento
    // La relación es de tipo "pertenece a" (belongsTo), lo que significa que un inventario pertenece a un medicamento
    // El campo medicamento_id es el que se utiliza para establecer la relación
    public function medicamento()
    {
        return $this->belongsTo(Medicamento::class, 'medicamento_id');
    }
}
