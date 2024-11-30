import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import AppLayout from '../Layouts/AppLayout'
import { usePage } from '@inertiajs/react';

const Dashboard = () => {
    const {props} = usePage();
    console.log(props.user);
    return (
        <>
            <AppLayout title='Dashboard'>
                <div>
                    <h1>DASHBOARD</h1>

                </div>
            </AppLayout>
        </>
    )
}

Dashboard.layout = (page) => <AuthenticatedLayout>{page}</AuthenticatedLayout>

export default Dashboard
