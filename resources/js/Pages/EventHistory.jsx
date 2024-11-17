import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'

const EventHistory = () => {
    return (
        <div>
            <h1>EVENT HISTORY</h1>
        </div>
    )
}

EventHistory.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default EventHistory
