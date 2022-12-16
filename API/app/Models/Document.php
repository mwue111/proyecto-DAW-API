<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    protected $primaryKey = 'file_id';

    protected $fillable =[
        'file_id',
        'expiration_date',
    ];

    public function file(){
        return $this->belongsTo(File::class);
    }
}
