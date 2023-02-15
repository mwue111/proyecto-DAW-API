<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Town extends Model
{
    use HasFactory;

    protected $fillable =[
        'name',
        'state_id'
    ];

    public function state() {
        return $this->belongsTo('App\Models\State');
    }

    public function address() {
        return $this->hasMany(Address::class);
    }

}
