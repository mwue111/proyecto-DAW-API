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
        'telephone2',
        'latitude',
        'longitude',
    ];

    public function schedules(){
        return $this->belongsToMany(Schedule::class);
    }

    
    public function products()
    {
        return $this->belongsToMany(Product::class, 'products_stores');
    }
    public function specialDays(){
        return $this->belongsToMany(SpecialDay::class, 'special_days_stores');
    }

}


