<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImg extends Model
{
    use HasFactory;

    protected $primaryKey = 'file_id';

    protected $fillable = [
        'file_id',
        'product_id',
    ];

    public function file(){
        return $this->belongsTo(File::class);
    }

}
