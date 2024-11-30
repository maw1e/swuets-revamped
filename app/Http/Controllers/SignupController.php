<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SignupController extends Controller
{
    public function signup(Request $request) {
        $request->validate([
            'name' => ['required', 'max:255'],
            'email' => ['required', 'email'],
            'role' => ['required', 'string'],
            'password' => ['confirmed', 'required'],
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ]);

        $role = $request->input('role');
        $user->assignRole($role);
        
        Auth::login($user);

        return redirect()->route('dashboard');
    }
}
