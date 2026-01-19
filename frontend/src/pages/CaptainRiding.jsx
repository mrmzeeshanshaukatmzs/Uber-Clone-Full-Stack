import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../Components/FinishRide'

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)

  useGSAP(function(){
      if(finishRidePanel){
        gsap.to(finishRidePanelRef.current,{
          transform: `translateY(0)`
        })
      }
      else{
        gsap.to(finishRidePanelRef.current,{
          transform: `translateY(100%)`
        })
      }
    }, [finishRidePanel])
  return (
    <div className='h-screen'>
     
      <div className='w-full fixed p-6 top-0 flex items-center justify-between '>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-1/5 relative p-6 flex items-start justify-between bg-yellow-400'
      onClick={()=>{
        setFinishRidePanel(true)
      }}
      >
      <h5 className='w-[90%] p-1 text-center absolute top-0'><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
      <div className='flex justify-between items-center w-full'>
      <h4 className='text-xl font-semibold mt-5'>4 KM Away</h4>
      <button className='bg-green-600 mt-5 text-white font-semibold p-3 px-10 rounded-lg'>Complet Ride</button>
      </div>
      </div>
     
      <div ref={finishRidePanelRef} className ='translate-y-full w-full fixed z-10 bottom-0 bg-white px-3 py-10 pt-10'>
       <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>

    </div>
  )
}

export default CaptainRiding