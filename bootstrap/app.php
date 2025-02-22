<?php

// Importación de clases esenciales de Laravel para configurar la aplicación
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

// Configuración y creación de la instancia de la aplicación Laravel
return Application::configure(basePath: dirname(__DIR__)) // Define la ruta base del proyecto
    ->withRouting( // Configura las rutas principales de la aplicación
        web: __DIR__.'/../routes/web.php', // Carga las rutas web definidas en este archivo
        commands: __DIR__.'/../routes/console.php', // Carga los comandos de consola
        health: '/up', // Define una ruta de verificación de estado para comprobar si la aplicación está activa
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Sección para agregar middleware personalizados si es necesario
    })
    ->withExceptions(function (Exceptions $exceptions) {
        // Sección para configurar el manejo de excepciones personalizadas
    })->create(); // Se genera y retorna la instancia de la aplicación
