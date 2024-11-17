import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

const Dashboard = () => {
    return (
        <div>
            <h1>DASHBOARD</h1>
        </div>
    )
}

Dashboard.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default Dashboard
