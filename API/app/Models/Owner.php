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
}

/**
 * 
 * owners.id' in 'where clause' (SQL: select * from `owners` where `owners`.`id` = 1 limit 1) in file /var/www/html/vendor/laravel/framework/src/Illuminate/Database/Connection.php on line 760

 */
