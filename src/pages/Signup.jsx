import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputText from '../components/InputText'
import CommonButton from '../components/CommonButton'
import axios from 'axios'

const Signup = () => {

    const [email, setEmail] = useState('');
    const [fullName, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        try {
            const result = await axios.post('http://localhost:8000/api/signup', {email, fullName, password, confirmPassword});
            console.log(result);
            setEmail('');
            setFullname('');
            setPassword('');
            setConfirmPassword('');
            navigate('/')
        } catch (error) {
            console.error(error);
                setError(error.response?.data?.message || "An error occurred");
                setPassword('');
                setConfirmPassword('');
        }
    }
    
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='w-auto border-solid border-2 border-black rounded-md p-8 flex flex-col items-center justify-center'>
                <h1 className='text-5xl mb-4'>SIGNUP</h1>
                {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
                <div className='mt-6'>
                    <form onSubmit={handleSubmit}>
                        <InputText onChange={(e) => setEmail(e.target.value)} type='email' label='Email' value={email} />
                        <InputText onChange={(e) => setFullname(e.target.value)} type='text' label='Full Name' value={fullName} />
                        <InputText onChange={(e) => setPassword(e.target.value)} type='password' label='Password' value={password} />
                        <InputText onChange={(e) => setConfirmPassword(e.target.value)} type='password' label='Confirm Password' value={confirmPassword} />
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
