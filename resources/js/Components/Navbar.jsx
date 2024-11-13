import React from 'react'
import { Link } from '@inertiajs/react'
import { Button } from '@mui/material'


const Navbar = () => {
  return (
    <div>
        <header>
          <nav className="bg-white p-4 flex justify-between items-center border-b border-slate-300 shadow-lg pl-16 pr-16 fixed top-0 left-0 w-full">
            <Link href='/' as='button'><Button variant="text" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>SWUETS</Button></Link>
            <div className="flex space-x-4">
              <Button variant="contained" size='large'><Link href='/login' as='button'>LOGIN</Link></Button>
              <Button variant="outlined" size='large' sx={{ marginLeft: '16px'}}><Link href='/signup' as='button'>Signup</Link></Button>
            </div>
          </nav>
        </header>
    </div>
  )
}

export default Navbar
