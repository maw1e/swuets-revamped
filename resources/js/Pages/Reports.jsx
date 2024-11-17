import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import AppLayout from '../Layouts/AppLayout'

const Reports = () => {
    return (
        <>
            <AppLayout title='Reports'>
                <div>
                    <h1>REPORTS</h1>
                </div>
            </AppLayout>
        </>
    )
}

Reports.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default Reports
