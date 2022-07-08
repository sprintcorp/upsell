<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Weapon extends Model
{
    use HasFactory;

    protected $hidden = ['pivot'];

    public function heroes(): BelongsToMany
    {
        return $this->belongsToMany(Hero::class,'hero_weapons','weapon_id','hero_id');
    }
}
