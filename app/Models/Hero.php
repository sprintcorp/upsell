<?php

namespace App\Models;

use App\Events\HeroCreateEvent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Hero extends Model
{
    use HasFactory;

    protected $hidden = ['pivot'];

    protected static function booted() {
        static::created(function($hero) {
            event(new HeroCreateEvent($hero));
        });
    }

    public function weapons()
    {
        return $this->belongsToMany(Weapon::class,'hero_weapons','hero_id','weapon_id');
    }

    public static function getDamage()
    {
        return self::query()->withSum('weapons','damage')->get();
    }
}
