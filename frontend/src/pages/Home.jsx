import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css'
import LocationPanelSearch from '../Components/LocationPanelSearch';
import VehiclePanel from '../Components/VehiclePanel';
import ConfirmRide from '../Components/ConfirmRide';
import LookingForDriver from '../Components/LookingForDriver';
import WaitingForDriver from '../Components/WaitingForDriver';

const Home = () => {
  gsap.registerPlugin(useGSAP);

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')

  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)

  const [confirmRide, setConfirmRide] = useState(false)
  const ConfirmRidePanelRef = useRef(null)

  const [vehicleFound, setVehicleFound] = useState(false)
  const VehicleFoundRef = useRef(null)

  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const WaitingForDriverRef = useRef(null)




  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  // Gsap Vehicle Panel Ref
  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform: `translateY(0)`
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform: `translateY(100%)`
      })
    }
  }, [vehiclePanel])

  // Confirm Ride Panel
  useGSAP(function(){
    if(confirmRide){
      gsap.to(ConfirmRidePanelRef.current,{
        transform: `translateY(0)`
      })
    }
    else{
      gsap.to(ConfirmRidePanelRef.current,{
        transform: `translateY(100%)`
      })
    }
  }, [confirmRide])

  // Vehicle Found Panel
  useGSAP(function(){
    if(vehicleFound){
      gsap.to(VehicleFoundRef.current,{
        transform: `translateY(0)`
      })
    }
    else{
      gsap.to(VehicleFoundRef.current,{
        transform: `translateY(100%)`
      })
    }
  }, [vehicleFound])

  // Waiting For Driver
  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(WaitingForDriverRef.current,{
        transform: `translateY(0)`
      })
    }
    else{
      gsap.to(WaitingForDriverRef.current,{
        transform: `translateY(100%)`
      })
    }
  }, [waitingForDriver])

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      {/* Img for temporary */}
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5
            onClick={() => {
              setpanelOpen(false)
            }}
            ref={panelCloseRef}
            className='absolute opacity-0 top-6 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h1 className='text-2xl font-semibold'>Find a Trip</h1>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line h-20 w-1 bg-gray-900 absolute top-[42%] left-10 rounded-full"></div>
            <input
              onClick={() => {
                setpanelOpen(true)
              }}
              value={pickup}
              onChange={(e) =>
                setPickup(e.target.value)
              }
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick up location' />
            <input
              onClick={() => {
                setpanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
          </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
          <LocationPanelSearch  setpanelOpen={setpanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className ='another w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-10'>
        <VehiclePanel setConfirmRide={setConfirmRide} setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={ConfirmRidePanelRef} className ='another w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-10'>
         <ConfirmRide setConfirmRide={setConfirmRide} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={VehicleFoundRef} className ='another w-full fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-10'>
         <LookingForDriver  setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={WaitingForDriverRef} className ='another w-full fixed z-10 bottom-0 bg-white px-3 py-6 pt-10'>
         <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  )
}

export default Home