import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

const EventManagement = () => {
    return (
        <div>
            <h1>EVENT MANAGEMENT</h1>
        </div>
    )
}

EventManagement.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default EventManagement
