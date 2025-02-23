<?php

// Definimos el namespace de la clase, que en este caso es App\Models
namespace App\Models;

// Importamos las clases necesarias para utilizar Eloquent, el ORM de Laravel
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\personas as Persona;

// Definimos la clase Empleados, que hereda de Model
class Empleados extends Model
{
    // Utilizamos el trait HasFactory para habilitar la creación de factories para esta clase
    use HasFactory;
    
    // Definimos los campos que se pueden rellenar mediante la creación de un nuevo empleado
    // Esto es una medida de seguridad para evitar la asignación masiva de atributos
    protected $fillable = [
        'persona_id', // El ID de la persona asociada al empleado
        'rol', // El rol del empleado
        'fecha_contrato', // La fecha de contratación del empleado
        'fecha_registro', // La fecha de registro del empleado
        'salario', // El salario del empleado
        'puesto' // El puesto del empleado
    ];

    // Definimos la relación entre un empleado y los detalles de venta que ha realizado
    // Un empleado puede tener muchos detalles de venta, por lo que utilizamos la relación hasMany
    public function detallesVenta()
    {
        // La relación se establece entre la tabla empleados y la tabla detalles_venta
        // El campo empleado_id en la tabla detalles_venta es el que se utiliza para establecer la relación
        return $this->hasMany(DetalleVenta::class, 'empleado_id');
    }

    public static function getDatosPersona(int $idPersona): Persona
    {
        return Persona::findOrFail($idPersona);
    }
}
