import React, { useState } from 'react'
import {AngelDown} from '../../utils/Icons'

const LanguageDropdown = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => setIsClick(!isClick)

  return (
    <div onClick={handleClick} className='relative flex items-center'>
      <img src='/image/indoFlag.png' alt='flag' width={20} height={20} className='mr-[5px]'/>
      <span>ID</span>
      <AngelDown size={20} color={'white'} />

      <div className={`absolute w-[150px] ${isClick ? 'top-[30px] opacity-100' : 'top-0 opacity-0'} left-0 bg-white rounded-[5px] transition-all duration-300 ease-in-out text-black box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1) flex items-start flex-col gap-[10px]`}>
        <button className='p-[10px] hover:bg-gray-200 rounded-[5px] w-[100%]'>Indonesia</button>
        <button className='p-[10px] hover:bg-gray-200 rounded-[5px] w-[100%]'>English</button>
      </div>
    </div>
  )
}

const NavbarNavigation = () => {
  return (
    <ul className='grid grid-cols-5 gap-[20px] items-center'>
      <li>
        <a href='#' className='text-[18px]'>Partnership</a>
      </li>
      <li>
        <a href='#' className='text-[18px]'>Support</a>
      </li>
      <li>
        <LanguageDropdown />
      </li>
      <li>
        <a href='#' className='text-[18px]'>Sign in</a>
      </li>
      <li>
        <button onClick={() => {
          alert('button click')
        }} className='pt-[10px] pb-[12px] px-[28px] text-[18px] border-none rounded-[38px] bg-[#235FD2]'>Sign up</button>
      </li>
    </ul>
  )
}

export default NavbarNavigation