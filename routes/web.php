<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::inertia('/signup', 'Auth/Signup');
Route::inertia('/login', 'Auth/Login');