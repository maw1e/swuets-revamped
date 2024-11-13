import React from 'react'
import DefaultLayout from '../../Layouts/DefaultLayout';
import { Box, Container, TextField, Stack, Button } from '@mui/material';
import { Link } from '@inertiajs/react';


const Login = () => {
    return (
        <div className='flex justify-center items-center bg-white h-screen'>
            <Box>
                <Container
                    sx={{
                        width: '450px',
                        border: '1px solid black',
                        borderRadius: '8px', 
                        padding: '46px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
                    }}
                >
                    <Stack spacing={2}>
                        <h1 className='text-5xl text-center'>LOGIN</h1>
                        <TextField id="outlined-basic" label="Email" type='text' variant="outlined" />
                        <TextField id="outlined-basic" label="Password" type='password' variant="outlined" />
                        <Button variant='contained' size='large'>LOGIN</Button>
                    </Stack>
                    <div className='mt-8'>
                        <p className='text-center'>Don't have an account? <Link href='/signup' className='text-red-800 font-bold'>Signup</Link></p>
                        <p className='text-center mt-2'>Go back <Link href='/' className='text-red-800 font-bold'>Home</Link></p>
                    </div>
                    
                </Container>
            </Box>
        </div>
    )
}

Login.layout = <DefaultLayout />

export default Login
