<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchedulesStore extends Model
{
    use HasFactory;

    protected $fillable = [
        'schedules_id',
        'stores_id'
    ];
}

