<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;


class UserMgmtController extends Controller
{
    public function index () {
        $users = User::with('roles')->get()->map(function ($user) {
            $user->role_names = $user->roles->pluck('name')->join(', ');
            return $user;
        });

        return Inertia::render('UserManagement', [
            'users' => $users,
        ]);
    }

    public function createUser(Request $request) {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'confirmed'],
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ]);

        $role = $request->input('role');
        $user->assignRole($role);

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

        $role = $request->input('role');
        $user->assignRole($role);


        return redirect()->back()->with('success', 'User updated successfully!');
    }
}
