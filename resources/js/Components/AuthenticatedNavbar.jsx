import React from 'react'
import MiniDrawer from './MiniDrawer'
import { Link } from '@inertiajs/react'
import { Button } from '@mui/material'


const AuthenticatedNavbar = ({children}) => {
    return (
        <>
            <div>
                <header>
                    <nav className="bg-white p-4 flex justify-between items-center border-b border-slate-300 shadow-lg pl-16 pr-16 fixed top-0 left-0 w-full">
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
