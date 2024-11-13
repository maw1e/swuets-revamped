import React from 'react'
import { Link } from '@inertiajs/react'

const Layout = ({children}) => {
    return (
        <>
            <header>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}

export default Layout
