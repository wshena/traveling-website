import React from 'react'

const BigCard = ({type, title, description, image}) => {
  return (
    <div className='w-[750px] flex gap-[26px] items-center py-[26px] px-[17px] rounded-[17px] bg-white' style={{
      boxShadow: '0px 4.43px 17.71px 0px rgba(158, 158, 158, 0.25)'
    }}>
      <div className='w-[50%]'>
        <img src={image} alt='plane' className='w-[100%] h-[100%] rounded-[23px]' />
      </div>
      <div className='w-[50%] flex flex-col'>
        <h3 className='text-[17px]'>{type}</h3>
        <h1 className='leading-[31px] text-[26px] font-bold mb-[17px]'>{title}</h1>
        <p className='mb-[17px] text-[17px]'>{description}</p>

        <div>
          <button className='text-white bg-[#235FD2] py-[17px] px-[35px] rounded-[35px]'>See more</button>
        </div>
      </div>
    </div>
  )
}

export default BigCard