<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model{
    use HasFactory;

    protected $fillable =[
        'name',
        'address_id',
        'email',
        'telephone1',
        'telephone2'
    ];

    public function schedules(){
        return $this->belongsToMany(Schedule::class);
    }
}


