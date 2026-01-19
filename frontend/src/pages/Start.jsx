import React from 'react'
import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8)] h-screen pt-5 w-full flex justify-between flex-col'>
      <img className='w-16 ml-8 text-white' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='bg-white py-4 px-4 pb-7'>
        <h2 className='text-3xl font-bold'>Get Started With Uber.</h2>
        <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-2'>Continue</Link>
      </div>
    </div>
  )
}

export default Start