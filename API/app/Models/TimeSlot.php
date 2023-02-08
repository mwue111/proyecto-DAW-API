<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimeSlot extends Model
{
    use HasFactory;

    //pertenece a varios días
    protected $fillable = [
        'open_time',
        'closed_time'
    ];

    public function schedules(){
        //return $this->hasMany('App\Models\Schedule');
        return $this->hasMany(Schedule::class, 'time_slot_id', 'id');
    }
}
