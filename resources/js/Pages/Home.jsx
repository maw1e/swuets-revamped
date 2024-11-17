import React from 'react'
import { Link } from '@inertiajs/react'
import { Button } from '@mui/material'
import { useRoute } from 'ziggy-js'
import AppLayout from '../Layouts/AppLayout'

const Home = () => {
    const route = useRoute();

    return (
      <AppLayout title='Home'>
        <section className="flex items-center justify-center text-black py-20 h-screen">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-7xl font-bold mb-4">WELCOME TO SWUETS</h1>
            <p className="text-lg md:text-xl mb-8">Discover amazing features and experiences tailored just for you.</p>
            <div>
              <Link href={route('login')}><Button variant="contained" size='large' sx={{ marginLeft: '16px'}}>Login</Button></Link>
              <Link href={route('login')}><Button variant="outlined" size='large' sx={{ marginLeft: '16px'}}>Signup</Button></Link>
            </div>
            
          </div>
        </section>
      </AppLayout>
    )
}

export default Home
