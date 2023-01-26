<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model{
    use HasFactory;

    //días tienen una sola franja horaria
    protected $fillable = [
        'day_of_week',
        'time_slot_id'
    ];

    public function timeSlot(){
        //return $this->belongsTo('App\Models\TimeSlot');
        return $this->belongsTo(TimeSlot::class, 'time_slot_id');
    }

    public function stores(){
        return $this->belongsToMany(Store::class);
    }
}
                                   

