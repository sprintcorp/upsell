<?php

namespace App\Widgets;

use Arrilot\Widgets\AbstractWidget;

class Hero extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $count = \App\Models\Hero::count();
        $string = 'Heroes';

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-medal-rank-star',
            'title'  => "{$count} {$string}",
            'text' => '',
            'button' => [
                'text' =>'View Heroes',
                'link' => route('voyager.heroes.index'),
            ],
            'image' => voyager_asset('images/widget-backgrounds/02.jpg'),
        ]));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed(){
        return auth()->user()->hasPermission('browse_heroes');
    }
}
