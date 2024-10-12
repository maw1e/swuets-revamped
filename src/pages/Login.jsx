import React, { useState } from 'react'
import InputText from '../components/InputText'
import { Link, useNavigate } from 'react-router-dom'
import CommonButton from '../components/CommonButton'
import axios from 'axios'


const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/', {email, password})
      .then(result => {
        console.log(result)
        if(result.data === "Success") {
          navigate('/home')
        } else {
          navigate('/signup')
          alert('You are not registered, please create an account!')
        }
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='w-auto border-solid border-2 border-black rounded-md p-8 flex flex-col items-center justify-center'>
            <h1 className='text-5xl'>LOGIN</h1>
            <div className='mt-6'>
              <form onSubmit={handleSubmit}>
                <InputText onChange={(e) => setEmail(e.target.value)} type='text' label='Email' />
                <InputText onChange={(e) => setPassword(e.target.value)} type='password' label='Password' />
                <CommonButton type='submit' label='Login' />
              </form>
            </div>
            <div className='text-left w-full mt-6'>
                <p>Don't have an account? <Link to='/signup' className='text-red-800 hover:text-blue-700 underline'>Signup</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login
