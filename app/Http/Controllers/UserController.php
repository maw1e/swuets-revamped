<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index () {
        $user = User::all();

        return Inertia::render('UserManagement', [
            'user' => $user
        ]);
    }

    public function createUser(Request $request) {
        $fields = $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'confirmed'],
        ]);

        User::create($fields);

        // dd($request->session()->all()); // Dump the session data

        return redirect()->route('user_management')->with('success', ' User created successfully!');
    }

    public function deleteUser() {

    }

    public function updateUser() {

    }
}
