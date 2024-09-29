<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Auth/Login')->name('login');
Route::inertia('/signup', 'Auth/Signup')->name('signup');
