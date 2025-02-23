<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('empleado_id')->nullable()->after('id');

            // Se define la clave foránea para que referencia el campo id de la tabla empleados
            $table->foreign('empleado_id')->references('id')->on('empleados');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Primero se elimina la restricción de clave foránea
            $table->dropForeign(['empleado_id']);
            // Luego se elimina la columna empleado_id
            $table->dropColumn('empleado_id');
        });
    }
};
