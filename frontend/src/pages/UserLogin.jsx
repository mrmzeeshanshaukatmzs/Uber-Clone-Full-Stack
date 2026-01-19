import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {UserDataContext} from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState()
  const {user, setUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    
    const userData = {
      email: email,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setemail('')
    setpassword('')
  }
  return (
    <div className='h-screen p-7 flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h1 className='text-lg font-medium mb-3'>Enter Your Email</h1>
        <input
        value={email}
        onChange={(e) => {
          setemail(e.target.value)
        }}
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' required type="email" placeholder='email@example.com' />
        <h1 className='text-lg font-medium mb-3'>Enter Passowrd</h1>
        <input
        value={password}
        onChange={(e) => {
          setpassword(e.target.value)
        }}
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' required type="password" placeholder='password' />
        <button className='bg-black text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg'>Login</button>
        <p>New Here? <Link to='/signup' className='text-center text-blue-600'>Create New Account</Link></p>
      </form>
      </div>


      <Link to='/captain-login' className='bg-[#10b461] flex justify-center items-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg'>Sign in as Captain</Link>
    </div>
  )
}

export default UserLogin