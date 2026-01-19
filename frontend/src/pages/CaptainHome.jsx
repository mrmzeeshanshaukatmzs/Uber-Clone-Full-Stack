import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ConfirmRidePopUp from '../Components/ConfirmRidePopUp';

const CaptainHome = () => {


  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const RidePopUpPanelRef = useRef(null)

  const [ConfirmridePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
  const ConfirmRidePopUpPanelRef = useRef(null)

  

  useGSAP(function(){
    if(ridePopUpPanel){
      gsap.to(RidePopUpPanelRef.current,{
        transform: `translateY(0)`
      })
    }
    else{
      gsap.to(RidePopUpPanelRef.current,{
        transform: `translateY(100%)`
      })
    }
  }, [ridePopUpPanel])

  // Confirm Ride Popup Panel


 useGSAP(function(){
    if(ConfirmridePopUpPanel){
      gsap.to(ConfirmRidePopUpPanelRef.current,{
        transform: `translateY(0)`
      })
    }
    else{
      gsap.to(ConfirmRidePopUpPanelRef.current,{
        transform: `translateY(100%)`
      })
    }
  }, [ConfirmridePopUpPanel])
  return (
    <div className='h-screen'>
      <div className='w-full fixed p-6 top-0 flex items-center justify-between '>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-1\2'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-1/2 p-6'>
         <CaptainDetails />
      </div>
      <div ref={RidePopUpPanelRef} className ='translate-y-full w-full fixed z-10 bottom-0 bg-white px-3 py-10 pt-10'>
       <RidePopUp  setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>

      <div ref={ConfirmRidePopUpPanelRef} className ='h-screen translate-y-full w-full fixed z-10 bottom-0 bg-white px-3 py-10 pt-10'>
       <ConfirmRidePopUp  setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome