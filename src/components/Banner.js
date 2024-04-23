import React from 'react'

const Banner = () => {
  return (
    <div className="my-[80px] rounded-[26px] border-none container w-full h-[435px] flex items-center justify-start text-white bg-center bg-cover" style={{
      backgroundImage: 'url("/image/planeWing.png")'
    }}>
      <div className="p-[89px]">
        <h1 className="w-[75%] leading-[74px] font-bold text-[60px]">Find your dream vacation with our offer</h1>
        <h3 className="leading-[36px] text-[30px] mt-[23px]">Experience the beauty of the world with us, where you can see and feel its wonders</h3>
      </div>
    </div>
  )
}

export default Banner