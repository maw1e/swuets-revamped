<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\SignupController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;



Route::middleware(['auth'])->group(function() {
    //Dashboard routes
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard');

    //Event Management routes
    Route::inertia('/event_management', 'EventManagement')->name('event_management');

    // Users Management routes
    Route::inertia('/user_management', 'UserManagement')->name('user_management');
    Route::get('/user_management', [UserController::class, 'index'])->name('user_management');
    Route::post('/user_management', [UserController::class, 'createUser'])->name('user.create');

    // Reports route
    Route::inertia('/reports', 'Reports')->name('reports');

    // Event History
    Route::inertia('/event_history', 'EventHistory')->name('event_history');

    // Logout route
    Route::post('/logout', [LogoutController::class, 'logout'])->name('logout');
});



Route::middleware(['guest'])->group(function() {
    // Home route
    Route::inertia('/', 'Home')->name('home');

    // Login routes
    Route::inertia('/login', 'Auth/Login')->name('login');
    Route::post('/login', [LoginController::class, 'login'])->name('login.attempt');

    // Signup routes
    Route::inertia('/signup', 'Auth/Signup')->name('signup');
    Route::post('/signup', [SignupController::class, 'signup'])->name('signup.attempt');

    
});