<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');

Route::inertia('/login', 'Auth/Login');

Route::inertia('/signup', 'Auth/Signup');