import React from 'react'
import { Link } from '@inertiajs/react'
import { Button } from '@mui/material'
import { useRoute } from 'ziggy-js'


const Navbar = () => {
  const route = useRoute();

  return (
    <div>
        <header>
          <nav className="bg-white p-4 flex justify-between items-center border-b border-slate-300 shadow-lg pl-16 pr-16 fixed top-0 left-0 w-full">
            <Link href='/' as='button'><Button variant="text" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>SWUETS</Button></Link>
            <div className="flex space-x-4">
              <Button
                component={Link}
                href={route('login')}
                variant="contained"
                size='large'
                sx={{ marginLeft: '16px'}}
              >
                Login
              </Button>
              <Button
                component={Link}
                href={route('login')}
                variant="outlined"
                size='large'
                sx={{ marginLeft: '16px'}}
              >
                Signup
              </Button>
            </div>
          </nav>
        </header>
    </div>
  )
}

export default Navbar
