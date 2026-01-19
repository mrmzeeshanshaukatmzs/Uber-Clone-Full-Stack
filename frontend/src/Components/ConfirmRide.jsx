import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 onClick={() => { props.setConfirmRide(false) }} className='w-[93%] p-1 text-center absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
      <h2 className='text-2xl font-semibold mb-5'>Confirm Your Ride</h2>

      <div className='flex flex-col justify-between items-center gap-2'>
        <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
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
        <button 
        onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmRide(false)
        }}
         className='mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>

      </div>
    </div>
  )
}

export default ConfirmRide