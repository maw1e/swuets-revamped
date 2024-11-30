<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'John Admin',
                'email' => 'johnmarieygot21@gmail.com',
                'password' => '123',
                'role' => 'Admin',
            ],
            [
                'name' => 'John Organizer',
                'email' => 'john@gmail.com',
                'password' => '123',
                'role' => 'Organizer',
            ],
        ];

        foreach($users as $user) {
            $created_user = User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => Hash::make($user['password']),
            ]);

            $created_user->assignRole($user['role']);
        }
    }
}
