import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1\2'>
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='h-1/2 p-4'>
            <div className='flex items-center justify-between'>
       <img className='h-18' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
       <div className='text-right'>
        <h2 className='text-lg font-medium'>M Zeeshan</h2>
        <h4 className='etxt-xl font-semibold -mt-1 -mb-1'>Mpk 4528</h4>
        <p className='text-sm text-gray-600'>Mehran Boss</p>
       </div>
       </div>

      <div className='flex flex-col justify-between items-center gap-2'>
        <div className='w-full mt-5'>
          
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
      </div>
               <button className='mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a payment</button>
            </div>
        </div>
    )
}

export default Riding