@component('mail::message')
    Hello, <br>
    A new hero has been created. Below are the information regarding the hero<br/>
    Hero's name : {{$hero->name}} <br/>
    Hero's health : {{$hero->health}} <br/>

    Happy coding! <br/>

    Thanks, <br>
    {{ config('app.name') }} <br>
    Hero Team.
@endcomponent
