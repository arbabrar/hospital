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
        Schema::create('personas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 100);
            $table->string('apaterno', 100)->nullable();
            $table->string('amaterno', 100)->nullable();
            $table->string('nrodocumento', 20)->unique();
            $table->string('email', 150)->unique()->nullable();
            $table->string('telefono', 20)->nullable();
            $table->string('domicilio', 255)->nullable();
            $table->date('fecha_nacimiento');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personas');
    }
};
