<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    protected $fillable =[
        'name',
        'address_id',
        'email',
        'telephone1',
        'telephone2'
    ];
    
    public function product()
    {
        return $this->belongsToMany(Product::class, 'product_store', 'stores_id', 'products_id');
    }
}
