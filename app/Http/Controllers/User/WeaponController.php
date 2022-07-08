<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Weapon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WeaponController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $weapons = Weapon::withCount('heroes')->get();
        return Inertia::render('Weapons',compact('weapons'));
    }
}
