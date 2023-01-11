<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BrandImg extends Model
{
    use HasFactory;

    protected $primaryKey = 'file_id';

    protected $fillable = [
        'file_id',
        'brand_id',
    ];

    public function file(){
        return $this->belongsTo(File::class);
    }

    public function brand(){
        return $this->belongsTo(Brand::class);
    }
}
