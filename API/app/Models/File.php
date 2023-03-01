<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'url',
        'user_id',
        'type',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function document(){
        return $this->hasOne(Document::class);
    }

    public function profileImgs(){
        return $this->hasOne(ProfileImg::class);
    }

    public function productImgs(){
        return $this->hasOne(ProductImg::class);
    }

    public function storeImgs(){
        return $this->belongsTo(StoreImg::class);
    }

    public function brandImgs(){
        return $this->hasOne(BrandImg::class);
    }
}
