import React, { useState } from 'react'
import { Star } from '../../utils/Icons';

const Favourite = ({fav}) => {
  const [isClick, setIsClick] = useState(fav);
  const handleClick = () => setIsClick(!isClick);

  return (
    <button onClick={handleClick}>
      {
        isClick ? <img src='/image/redHeart.png' alt='fav' /> : <img src='/image/grayHeart.png' alt='no-fav' />
      }
    </button>
  )
}

const SmallCard = ({name, image, address, rating, star, price, discount, fav}) => {
  const starsArray = Array.from({ length: star }).fill(null);

  return (
    <div className='mb-[30px] cursor-pointer bg-white rounded-[17.71px] p-[17px] flex flex-col gap-[26px] w-[370px] h-[470px]' style={{
      boxShadow: '0px 4.43px 17.71px 0px rgba(158, 158, 158, 0.25)'
    }}>
      <div className='w-[100%] flex items-start justify-end p-[17px] h-[50%] bg-center bg-cover rounded-[8.86px]' style={{
        backgroundImage: `url("${image}")`
      }}><Favourite fav={fav} /></div>

      <div className='w-[100%] flex flex-col'>
        <div className='flex items-center justify-between'>
          <h1 className='text-[24px]'>{name}</h1>
          <span className='text-[17.71px] text-[#535353]'>{rating}</span>
        </div>
        <h3 className='text-[17.71px] text-[#535353]'>{address}</h3>
        <div className='flex items-center gap-[3px] mb-[26px]'>
          {
            starsArray.map((_, idx) => {
              return <Star size={20} color='yellow' />
            })
          }
        </div>

        <h3 className='text-[17.71px] text-[#535353] line-through'>{discount}</h3>
        <h2 className='flex items-end'><span className='font-bold text-[26.57px]'>{price}</span><span className='text-[13.28px] opacity-50'>/person</span></h2>
      </div>
    </div>
  )
}

export default SmallCard