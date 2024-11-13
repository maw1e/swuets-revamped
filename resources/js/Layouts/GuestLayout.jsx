import React from 'react'
import Navbar from '../Components/Navbar'

const Layout = ({children}) => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
