import React, { useState } from 'react'

const RidePopUp = (props) => {


  return (
    <div>
         <h5 onClick={() => { props.setRidePopUpPanel(false) }} className='w-[93%] p-1 text-center absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
      <h2 className='text-2xl font-semibold mb-5'>New Ride Available!</h2>
      <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
        <div className='flex items-center gap-3'>
            <img className='h-12 w-12 object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2 className='text-lg font-medium'>Mr Usama</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 km</h5>
      </div>

      <div className='flex flex-col justify-between items-center gap-2'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-1'>
          <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>Gulastan Colony street No 8</h3>
              <p className='text-sm text-gray-600 -mt-1'>Shahkot Distric Nankana Sahib</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-1'>
          <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className='text-lg font-medium'>Gulastan Colony street No 8</h3>
              <p className='text-sm text-gray-600 -mt-1'>Shahkot Distric Nankana Sahib</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
          <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>Rs 700</h3>
              <p className='text-sm text-gray-600 -mt-1'>Cash</p>
            </div>
          </div>
        </div>
        <div className='btns-div mt-5 w-full flex justify-between items-center'>
        <button
         onClick={()=>{
            props.setRidePopUpPanel(false)
        }} 
         className='mt-5 w-full bg-gray-300 text-gray-700 font-semibold p-3 px-8 rounded-lg'>Ignore</button>
        <button 
        onClick={()=>{
          props.setConfirmRidePopUpPanel(true)
        }}
         className='mt-5 w-full bg-green-600 text-white font-semibold p-3 px-8 rounded-lg'>Accept</button>
        </div>
      </div>
    </div>
  )
}

export default RidePopUp