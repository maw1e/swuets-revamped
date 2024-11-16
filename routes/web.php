<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\SignupController;
use Illuminate\Support\Facades\Route;



Route::middleware(['auth'])->group(function() {
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard');

    // Logout route
    Route::post('/logout', [LogoutController::class, 'logout'])->name('logout');
});



Route::middleware(['guest'])->group(function() {
    // Home route
    Route::inertia('/', 'Home');

    // Login routes
    Route::inertia('/login', 'Auth/Login')->name('login');
    Route::post('/login', [LoginController::class, 'login']);

    // Signup routes
    Route::inertia('/signup', 'Auth/Signup');
    Route::post('/signup', [SignupController::class, 'signup']);

    
});