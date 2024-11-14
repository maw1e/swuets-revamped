<?php

use App\Http\Controllers\SignupController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home');

Route::inertia('/login', 'Auth/Login')->name('login');

Route::inertia('/signup', 'Auth/Signup');

Route::post('/signup', [SignupController::class, 'signup']);

Route::inertia('/dashboard', 'Dashboard')->name('dashboard');