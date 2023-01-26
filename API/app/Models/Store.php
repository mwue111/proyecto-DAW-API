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
        'schedule_id',
        'special_day_id',
        'user_id',
    ];


    public function schedulesStore(){
        return $this->belongsToMany(Schedule::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'products_stores')->withPivot('unit', 'stock', 'value', 'remarks');
    }

    public function specialDays(){
        return $this->belongsToMany(SpecialDay::class, 'special_days_stores');
    }

    public function address(){
        return $this->belongsTo(Address::class);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class);
    }

    public function storeImgs(){
        return $this->hasMany(StoreImg::class);
    }

    public function owner(){
        return $this->belongsTo(Owner::class, 'user_id');
    }
}


