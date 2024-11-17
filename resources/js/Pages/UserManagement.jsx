import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

const UserManagement = () => {
    return (
        <div>
            <h1>USER MANAGEMENT</h1>
        </div>
    )
}

UserManagement.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default UserManagement
