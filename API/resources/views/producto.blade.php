{{--Vista para la tabla de productos--}}

@extends('layouts.master')

@section('title', 'Producto')

@section('content')
    <p>Productos disponibles: </p>

    @foreach($productos as $producto)
    {{$producto}} <br>
    @endforeach
    
@endsection 