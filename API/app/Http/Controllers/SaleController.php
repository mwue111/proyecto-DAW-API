<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sale;

class SaleController extends Controller
{
    public function index()
    {
        $sales = Sale::all();
        return response()->json($sales);
    }

    public function show($id)
    {
        $sale = Sale::find($id);
        return response()->json($sale);
    }

    public function store(Request $request)
    {
        $sale = Sale::create($request->all());
        return response()->json($sale);
    }

    public function update(Request $request, $id)
    {
        $sale = Sale::find($id);
        $sale->update($request->all());
        return response()->json($sale);
    }

    public function destroy($id)
    {
        $sale = Sale::find($id);
        $sale->delete();
    }
}
