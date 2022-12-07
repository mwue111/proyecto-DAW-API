<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpecialDay extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'date',
        'remarks'
    ];

    public function stores(){
        return $this->belongsToMany(Store::class, 'special_days_stores');
    }
}
