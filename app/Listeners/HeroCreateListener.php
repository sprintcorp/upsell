<?php

namespace App\Listeners;

use App\Events\HeroCreateEvent;
use App\Mail\HeroCreateMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class HeroCreateListener implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param HeroCreateEvent $heroCreateEvent
     * @return void
     */
    public function handle(HeroCreateEvent $heroCreateEvent)
    {
        Log::debug($heroCreateEvent->hero->name);
        Mail::to('adetimifred@gmail.com')->send(new HeroCreateMail($heroCreateEvent->hero));
    }
}
