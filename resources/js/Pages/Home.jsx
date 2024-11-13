import React from 'react'
import { Link } from '@inertiajs/react'
import { Button } from '@mui/material'

const Home = () => {
    return (
        <section className="flex items-center justify-center text-black py-20 h-screen">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-7xl font-bold mb-4">WELCOME TO SWUETS</h1>
            <p className="text-lg md:text-xl mb-8">Discover amazing features and experiences tailored just for you.</p>
            <div>
              <Button variant="contained" size='large'><Link href='/login' as='button'>LOGIN</Link></Button>
              <Button variant="outlined" size='large' sx={{ marginLeft: '16px'}}><Link href='/signup' as='button'>Signup</Link></Button>
            </div>
            
          </div>
        </section>
    )
}

export default Home
