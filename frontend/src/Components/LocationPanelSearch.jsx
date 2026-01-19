import React from 'react'
import 'remixicon/fonts/remixicon.css'


const LocationPanelSearch = (props) => {
  const locations = [
    "Gulastan Colony shahkot Sangla hill road",
    "Abdullah Garden Shahkot near Gulastan Colony",
    "Awais Colony Shahkot near Gulastan Colony",
    "Model City Shahkot near Gulastan"
  ]
  return (
    <div>
      { 
        locations.map(function(elem,idx){
          return  <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setpanelOpen(false)
          }} className='flex items-center justify-start gap-4 my-2 border-2 border-gray-100 active:border-black p-3 rounded-lg'>
          <h2 className='bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>{elem}</h4>
        </div>
        })
      }
    </div>
  )
}

export default LocationPanelSearch