import React from 'react'
import Navbar from './Navbar/Navbar'
import FormTabs from './FormTabs'
import Category from './Category'

const Header = () => {
  return (
    <header className="w-full bg-center bg-cover h-[883px]" style={{
      backgroundImage: 'url("/image/landingBG.png")'
    }}>
      <div className="container">
        <Navbar />
        <div className="text-white w-[55%] flex flex-col gap-[28px] my-[40px]">
          <h1 className="text-[71px] font-bold leading-[85.2px]">Discover your next destination</h1>
          <p className="text-[22px] leading-[26.4px]">Explore incredible destinations with exclusive offers. Eat, travel, stay, and experience amazing places.</p>
        </div>
        <FormTabs />
        <Category />
      </div>
    </header>
  )
}

export default Header