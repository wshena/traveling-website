import React, { useState } from 'react'
import { Calendar, PlaneTakeOff, Seats, Swap, ToggleOff, ToggleOn } from '../utils/Icons'

const Toggle = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = (e) => {
    e.preventDefault()
    setIsClick(!isClick);
  }

  return (
    <button onClick={handleClick}>
      {
        isClick ? <ToggleOn size={30} color='blue' /> : <ToggleOff size={30} color='blue' />
      }
    </button>
  )
}

export const FlightsForm = () => {
  return (
    <form className='text-black bg-white rounded-[12px] p-[25px] flex justify-between items-end'>
      <div className='flex flex-col gap-[13px] w-[300px]'>
        <h3>From - To</h3>
        <button className='bg-[#F7FAFF] flex items-center justify-between p-[12px]'>
          <div className='flex items-center gap-[8px]'>
            <PlaneTakeOff size={20} color='blue' />
            <span className='text-[14px]'>Jakarta (JKTA) - Surabaya (SUB)</span>
          </div>
          <Swap size={25} color='blue'/>
        </button>
      </div>

      <div className='flex flex-col gap-[13px] w-[300px]'>
        <div className='flex items-center justify-between'>
          <h3>Depart - Return</h3>
          <div className='flex items-center gap-[3px]'>
            <span className='text-[12px] text-[#5A5A5A]'>Roundtrip?</span>
            <Toggle />
          </div>
        </div>
        <button className='bg-[#F7FAFF] flex items-center justify-between p-[12px]'>
          <div className='flex items-center gap-[8px]'>
            <Calendar size={20} color='blue' />
            <span className='text-[14px]'>Wed, 21 Feb - Thu, 22 Feb</span>
          </div>
        </button>
      </div>

      <div className='flex flex-col gap-[13px] w-[300px]'>
        <h3>Passenger - Class</h3>
        <button className='bg-[#F7FAFF] flex items-center justify-between p-[12px]'>
          <div className='flex items-center gap-[8px]'>
            <Seats size={20} color='blue' />
            <span className='text-[14px]'>1 Passenger, Economy</span>
          </div>
        </button>
      </div>

      <button onClick={(e) => e.preventDefault()} className='bg-[#235FD2] text-white border-none rounded-[8px] text-[14px] py-[16px] px-[38px]'>Show Flights</button>
    </form>
  )
}

export const BookingForm = () => {
  return (
    <form className='text-black bg-white rounded-[12px] p-[25px] flex justify-between items-end'>
      <div className='flex flex-col gap-[13px] w-[300px]'>
        <h3>From - To</h3>
        <button className='bg-[#F7FAFF] flex items-center justify-between p-[12px]'>
          <div className='flex items-center gap-[8px]'>
            <PlaneTakeOff size={20} color='blue' />
            <span className='text-[14px]'>Jakarta (JKTA) - Surabaya (SUB)</span>
          </div>
          <Swap size={25} color='blue'/>
        </button>
      </div>

      <div className='flex flex-col gap-[13px] w-[300px]'>
        <div className='flex items-center justify-between'>
          <h3>Checkin - Checkout</h3>
          <div className='flex items-center gap-[3px]'>
            <span className='text-[12px] text-[#5A5A5A]'>Roundtrip?</span>
            <Toggle />
          </div>
        </div>
        <button className='bg-[#F7FAFF] flex items-center justify-between p-[12px]'>
          <div className='flex items-center gap-[8px]'>
            <Calendar size={20} color='blue' />
            <span className='text-[14px]'>Wed, 21 Feb - Thu, 22 Feb</span>
          </div>
        </button>
      </div>

      <div className='flex flex-col gap-[13px] w-[300px]'>
        <h3>Guests - Rooms</h3>
        <button className='bg-[#F7FAFF] flex items-center justify-between p-[12px]'>
          <div className='flex items-center gap-[8px]'>
            <Seats size={20} color='blue' />
            <span className='text-[14px]'>1 Guest, Luxury</span>
          </div>
        </button>
      </div>

      <button onClick={(e) => e.preventDefault()} className='bg-[#235FD2] text-white border-none rounded-[8px] text-[14px] py-[16px] px-[38px]'>Show Rooms</button>
    </form>
  )
}