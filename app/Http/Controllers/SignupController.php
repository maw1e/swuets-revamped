<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SignupController extends Controller
{
    public function signup(Request $request) {
        sleep(1);
        $fields = $request->validate([
            'email' => ['required', 'max:255', 'email'],
            'firstName' => ['required', 'max:255'],
            'middleName' => ['required', 'max:255'],
            'lastName' => ['required', 'max:255'],
            'password' => ['required', 'confirmed']
        ]);

        $user = User::create($fields);

        Auth::login($user);

        return redirect()->route('dashboard')->with('success', 'Signup complete');
    }
}
