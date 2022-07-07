<?php

namespace App\Listeners;

use App\Events\UserCreateEvent;
use App\Mail\UserCreateMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;

class UserCreateListener implements ShouldQueue
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
     * @param UserCreateEvent $userCreateEvent
     * @return void
     */
    public function handle(UserCreateEvent $userCreateEvent)
    {
        Mail::to('adetimifred@gmail.com')->send(new UserCreateMail($userCreateEvent));
    }
}
