import React from 'react'
import MiniDrawer from './MiniDrawer'



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
