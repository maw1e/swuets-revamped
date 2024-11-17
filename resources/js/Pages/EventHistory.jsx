import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import AppLayout from '../Layouts/AppLayout'

const EventHistory = () => {
    return (
        <>
            <AppLayout title='Event History'>
                <div>
                    <h1>Event History</h1>
                </div>
            </AppLayout>
        </>
    )
}

EventHistory.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default EventHistory
