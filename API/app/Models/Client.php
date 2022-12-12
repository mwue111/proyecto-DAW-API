<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model{
    
    use HasFactory;
    
    //Hacerlo con todas las tablas relacionadas con usuario
    protected $primaryKey = 'user_id';

    protected $fillable = [
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
