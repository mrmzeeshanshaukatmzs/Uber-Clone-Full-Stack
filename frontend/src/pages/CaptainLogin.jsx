import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'



const CaptainLogin = () => {
  const [email, setemail] = useState('')
    const [password, setpassword] = useState()

    const {captain, setCaptain} = React.useContext(CaptainDataContext)
    const navigate = useNavigate()
  
    const submitHandler = async (e) => {
      e.preventDefault()
      const captain = {
        email: email,
        password: password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

      if (response.status === 200) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }

    

      setemail('')
      setpassword('')
    }
  return (
    <div className='h-screen p-7 flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-8' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
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
        <p>Join a fleet? <Link to='/captain-signup' className='text-center text-blue-600'>Register as a Captain</Link></p>
      </form>
      </div>

          <Link to='/login' className='bg-[#d5622d] flex justify-center items-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg'>Sign in as User</Link>
      
      </div>
  )
}

export default CaptainLogin