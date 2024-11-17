import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import AppLayout from '../Layouts/AppLayout'

const EventManagement = () => {
    return (
        <>
            <AppLayout title='Event Management'>
                <div>
                    <h1>Event Management</h1>
                </div>
            </AppLayout>
        </>
    )
}

EventManagement.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default EventManagement
