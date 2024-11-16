import React from 'react'
import DefaultLayout from '../../Layouts/DefaultLayout';
import { Box, Container, TextField, Stack, Button } from '@mui/material';
import { Link, useForm } from '@inertiajs/react';


const Login = () => {

    const {data, setData, post, processing, errors} = useForm({
        email: '',
        password: '',
    })

    const submit = (e) => {
        e.preventDefault();

        post('/login');
    }

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
                    <form onSubmit={submit}>
                        <Stack spacing={2}>
                            <h1 className='text-5xl text-center'>LOGIN</h1>
                            <TextField id="outlined-basic" label="Email" type='text' variant="outlined" value={data.email} onChange={e => setData('email', e.target.value)} />
                            {errors.email && <span className='text-red-500'>{errors.email}</span>}
                            <TextField id="outlined-basic" label="Password" type='password' variant="outlined" value={data.password} onChange={e => setData('password', e.target.value)} />
                            {errors.password && <span className='text-red-500'>{errors.password}</span>}
                            <Button type='submit' variant='contained' size='large'>LOGIN</Button>
                        </Stack>
                    </form>
                    <div className='mt-8'>
                        <p className='text-center'>Don't have an account? <Link href='/signup' className='text-red-800 font-bold'>Signup</Link></p>
                        <p className='text-center mt-2'>Go back <Link href='/' className='text-red-800 font-bold'>Home</Link></p>
                    </div>
                    
                </Container>
            </Box>
        </div>
    )
}

Login.layout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Login
