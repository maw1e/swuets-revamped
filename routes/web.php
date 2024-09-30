<?php

use App\Http\Controllers\SignupController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Auth/Login')->name('login');
Route::inertia('/signup', 'Auth/Signup')->name('signup');


Route::post('/signup', [SignupController::class, 'signup'])->name('signup');

Route::inertia('/dashboard', 'Dashboard')->name('dashboard');