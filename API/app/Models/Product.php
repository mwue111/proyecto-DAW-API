<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'brands_id',
    ];
    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brands_id');
    }
    public function tags ()
    {
        return $this->belongsToMany(Tag::class, 'products_tags', 'products_id', 'tags_id');
    }

    public function store()
    {
        return $this->belongsToMany(Store::class, 'product_store', 'products_id', 'stores_id');
    }
}
