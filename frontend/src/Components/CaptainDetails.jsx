import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
         <div className='flex items-center justify-between mb-8'>
            <div className='flex items-center justify-start gap-3'>
              <img className='h-10 w-10 rounded-full object-cover' src="https://i.pinimg.com/474x/25/3a/bf/253abf4f1f4bc16b6dc04571f8d21624.jpg" alt="" />
              <h4 className='text-lg font-medium'>M Zeeshan</h4>
            </div>
            <div>
              <h4 className='text-xl font-semibold'>Rs 1800</h4>
              <p className='text-sm text-gray-600'>Earned</p>
            </div>
          </div>
          <div className='flex justify-center gap-5 items-start p-3 bg-gray-100 rounded-xl'>
            <div className='text-center'>
            <i className="text-2xl font-extralight ri-timer-2-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
            <i className="text-2xl font-extralight ri-speed-up-fill"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
            <i className="text-2xl font-extralight ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails