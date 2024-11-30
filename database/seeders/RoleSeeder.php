<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        //make role
        $role_admin = Role::create(['name' => 'Admin']);
        $role_organizer = Role::create(['name' => 'Organizer']);

        //make permission
        $permission_edit = Permission::create(['name' => 'edit']);
        $permission_read = Permission::create(['name' => 'read']);
        $permission_write = Permission::create(['name' => 'write']);
        $permission_delete = Permission::create(['name' => 'delete']);

        //assign permission to role
        $permission_admin = [$permission_delete, $permission_edit, $permission_read, $permission_write];

        $role_admin->syncPermissions($permission_admin);
        $role_organizer->givePermissionTo($permission_read);
    }
}
