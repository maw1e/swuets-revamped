import { Head } from '@inertiajs/react'
import React from 'react'

const AppLayout = ({title='Default Title', children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Default description for the website." />
                <meta name="keywords" content="default, keywords, for, site" />
                <meta name="author" content="Your Name or Company" />
            </Head>

            <main className='pl-16 pr-16 pt-8'>
                {children}
            </main>
        </>
    )
}

export default AppLayout
