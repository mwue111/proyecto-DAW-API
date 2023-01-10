<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'url',
        'user_id',
        'type',
    ];

    public function document(){
        return $this->hasOne(Document::class);
    }

    public function profileImgs(){
        return $this->hasOne(ProfileImg::class);
    }
}
