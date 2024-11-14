import React from 'react'
import AuthenticatedNavbar from '../Components/AuthenticatedNavbar'

const AuthenticatedLayout = ({children}) => {
    return (
        <>
            <header>
                <AuthenticatedNavbar />
            </header>
                
            

            <main>
                {children}
            </main>
        </>
    )
}

export default AuthenticatedLayout
