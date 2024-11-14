import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

const Dashboard = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <h1>DASHBOARD</h1>
        </div>
    )
}

Dashboard.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default Dashboard
