import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputText from '../components/InputText'
import CommonButton from '../components/CommonButton'
import axios from 'axios'

const Signup = () => {

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/signup', {email, name, password, confirmPassword})
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='w-auto border-solid border-2 border-black rounded-md p-8 flex flex-col items-center justify-center'>
                <h1 className='text-5xl'>SIGNUP</h1>
                <div className='mt-6'>
                    <form onSubmit={handleSubmit}>
                        <InputText onChange={(e) => setEmail(e.target.value)} type='email' label='Email' />
                        <InputText onChange={(e) => setName(e.taget.value)} type='text' label='Full Name' />
                        <InputText onChange={(e) => setPassword(e.target.value)} type='password' label='Password' />
                        <InputText onChange={(e) => setConfirmPassword(e.target.value)} type='password' label='Confirm Password' />
                        <CommonButton type='submit' label='Signup' />
                    </form>
                </div>
                <div className='text-left w-full mt-6'>
                    <p>Already have an account? <Link to='/' className='text-red-800 hover:text-blue-700 underline'>Login</Link></p>
                </div>
            </div>
        </div>
      )
}

export default Signup
