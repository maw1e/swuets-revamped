import React from 'react'
import AuthenticatedNavbar from '../Components/AuthenticatedNavbar'
import MiniDrawer from '../Components/MiniDrawer'

const AuthenticatedLayout = ({children}) => {
    return (
        <>
            <MiniDrawer>
                <main>
                    {children}
                </main>
            </MiniDrawer>
        </>
    )
}

export default AuthenticatedLayout
