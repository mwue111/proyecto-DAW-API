<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StoreImg extends Model
{
    use HasFactory;

    protected $primaryKey = 'file_id';

    protected $fillable = [
        'file_id',
        'store_id',
    ];

    public function file(){
        return $this->belongsTo(File::class);
    }

    public function store(){
        return $this->belongsTo(Store::class);
    }
}
