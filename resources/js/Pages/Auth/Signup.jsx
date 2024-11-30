import React from 'react'
import DefaultLayout from '../../Layouts/DefaultLayout';
import { Box, Container, TextField, Stack, Button, InputLabel, MenuItem, FormControl, Select, } from '@mui/material';
import { Link, useForm } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import AppLayout from '../../Layouts/AppLayout';


const Signup = () => {
    
    const route = useRoute();
    
    const roles = {
        admin: 'Admin',
        organizer: 'Organizer',
    }

    const {data, setData, post, processing, errors} = useForm({
        name: '',
        email: '',
        role: '',
        password: '',
        password_confirmation: '',
    })

    const submit = (e) => {
        e.preventDefault();

        post('/signup')
    }

    return (
        <AppLayout title='Signup'>
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
                                
                                    <h1 className='text-5xl text-center'>SIGNUP</h1>
                                    <TextField id="outlined-basic" value={data.name} onChange={e => setData('name', e.target.value)} label="Name" type='text' variant="outlined" />
                                    {errors.name && <span className='text-red-500'>{errors.name}</span>}
                                    <TextField id="outlined-basic" value={data.email} onChange={e => setData('email', e.target.value)} label="Email" type='text' variant="outlined" />
                                    {errors.email && <span className='text-red-500'>{errors.email}</span>}
                                    <TextField id="outlined-basic" value={data.password} onChange={e => setData('password', e.target.value)} label="Password" type='password' variant="outlined" />
                                    {errors.password && <span className='text-red-500'>{errors.password}</span>}
                                    <TextField id="outlined-basic" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} label="Confirm Password" type='password' variant="outlined" />
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={data.role}
                                        label="Role"
                                        onChange={e => setData('role', e.target.value)}
                                        >
                                        <MenuItem value={roles.admin}>Admin</MenuItem>
                                        <MenuItem value={roles.organizer}>Organizer</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button type='submit' variant='contained' size='large'>SIGNUP</Button>
                            </Stack>
                        </form>
                        <div className='mt-8'>
                            <p className='text-center'>Already have an account? <Link href={route('login')} className='text-red-800 font-bold'>Login</Link></p>
                            <p className='text-center mt-2'>Go back <Link href={route('home')} className='text-red-800 font-bold'>Home</Link></p>
                        </div>
                        
                    </Container>
                </Box>
            </div>
        </AppLayout>
    )
}

Signup.layout = <DefaultLayout />

export default Signup
