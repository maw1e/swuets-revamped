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

    public function deleteUser($id) {
        sleep(1);
        $user = User::findOrFail($id);

        $user->delete();

        return redirect()->back()->with('success', 'User deleted successfully!');

    }

    public function updateUser(Request $request, $id) {
        sleep(1);
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email',],
        ]);

        $user = User::findOrFail($id);

        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
        ]);

        return redirect()->back()->with('success', 'User updated successfully!');
    }
}
