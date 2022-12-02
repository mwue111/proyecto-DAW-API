<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'road_type',
        'zip_code',
        'number',
        'name',
        'town_id',
        'remarks'
    ];

    public function town() {
        return $this->belongsTo('App\Models\Town');
    }
}