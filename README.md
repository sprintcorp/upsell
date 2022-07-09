# Getting started

## Brief description

The system is a hero weapon web application developed to assign weapons to users.

## Features
- Create user
- Create hero
- Create weapon
- Assign weapon to hero

## Tools
- PHP 8
- Laravel 9 framework
- mysql
- React
- Bootstrap
- Voyager admin panel


## Installation

Please check the official laravel installation guide for server requirements before you start.
[Official Documentation](https://laravel.com/docs/9.x/installation)


Clone the repository

    git clone https://github.com/sprintcorp/upsell.git

Switch to the folder directory

    cd upsell

Install server-side dependencies using composer manager

    composer install

Install client-side dependencies using node package manager

    npm install

After installation serve front-end of the project

    npm run dev


Copy the example env files and make the required configuration changes (database, queues and smtp connection)

    cp .env.example .env


Generate a new application key

    php artisan key:generate

Create database on local machine and set credentials to .env

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Populate the database with seed data with into the database

    php artisan db:seed

Start the local development server

    php artisan serve

You can now access the server at `http://127.0.0.1:8000`

Access admin page `http://127.0.0.1:8000/admin`

Running The Queue Worker for sending emails

    php artisan queue:work

To run test use the command below. 

    php artisan test

