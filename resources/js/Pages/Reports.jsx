import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

const Reports = () => {
    return (
        <div>
            <h1>REPORTS</h1>
        </div>
    )
}

Reports.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default Reports
