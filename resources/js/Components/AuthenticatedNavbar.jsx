import React from 'react'
import MiniDrawer from './MiniDrawer'
import { Button } from '@mui/material'



const AuthenticatedNavbar = ({children}) => {
    return (
        <>
            <div>
                <header>
                    <nav>
                        <MiniDrawer />
                    </nav> 
                </header>
            </div>

            <main>
                {children}
            </main>
        </>
    )
}

export default AuthenticatedNavbar
