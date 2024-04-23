import React from 'react'
import NavbarNavigation from './NavbarNavigation'

const Navbar = () => {
  return (
    <nav className='py-[27px] grid text-white' style={{
      gridTemplateColumns: '1fr auto'
    }}>
      <a href='/'> <span className='font-bold text-[24px]'>Logo</span> </a>
      <NavbarNavigation />
    </nav>
  )
}

export default Navbar