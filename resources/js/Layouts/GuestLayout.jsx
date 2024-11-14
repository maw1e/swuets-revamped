import React from 'react'
import GuestNavbar from '../Components/GuestNavbar'

const GuestLayout = ({children}) => {
    return (
        <>
            <header>
                <GuestNavbar />
            </header>

            <main>
                {children}
            </main>
        </>
    )
}

export default GuestLayout
