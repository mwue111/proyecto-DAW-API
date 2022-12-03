<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        "tienda*",
        "producto*",
        "unidad*",
        "marca*",
        "categoria*",
        "etiqueta*",
        "provincia*",
        "documento*",
        "archivo*",
        "ciudad*",
        "direccion*",
        "horario*",
        "producto*", 
        "franja_horaria*",
        "dia_especial*",
    ];
}
