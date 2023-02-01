<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    use HasFactory;

    protected $primaryKey = 'user_id';

    protected $fillable = [
        'user_id',
        'verified',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function stores(){
        return $this->hasMany(Store::class, 'user_id');
    }

}
