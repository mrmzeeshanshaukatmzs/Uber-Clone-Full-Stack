import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignUp = () => {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const {user, setUser} = React.useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()

    const newUser = {
      fullname:{
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);



    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }
   
    setfirstname('')
    setlastname('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className='h-screen p-7 flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form
        onSubmit={(e) => {
          submitHandler(e)
        }} 
        >
        <h1 className='text-lg font-medium mb-3'>Enter Your Name</h1>
          <div className='flex gap-4'>
            <input
              value={firstname}
              onChange={(e) => {
                setfirstname(e.target.value)
              }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base ' required type="text" placeholder='First Name' />
            <input
            value={lastname}
           onChange={(e)=>{
            setlastname(e.target.value)
           }}
              className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base ' required type="text" placeholder='Last Name' />
          </div>
          <h1 className='text-lg font-medium mt-4 mb-3'>Enter Your Email</h1>
          <input
           value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' required type="email" placeholder='email@example.com' />
          <h1 className='text-lg font-medium mb-3'>Enter Passowrd</h1>
          <input
           value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' required type="password" placeholder='password' />
          <button className='bg-black text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Create Account</button>
          <p>New Here? <Link to='/login' className='text-center text-blue-600'>Already Have a Account</Link></p>
        </form>
      </div>


      <p className='text-xs leading-tight'>Ride
      Go anywhere with Uber. Request a ride, hop in, and go.</p>
    </div>
  )
}

export default UserSignUp