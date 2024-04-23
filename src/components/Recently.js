import React from 'react'
import { RecentlyDestinations } from '../utils/const'
import SmallCard from './Cards/SmallCard'

const Recently = () => {
  return (
    <div className='mb-[80px]'>
      <div className='container'>
        <h1 className="text-black font-bold text-[35.42px] mb-[53px]">Recently viewed</h1>
      </div>
      <div className='ml-[75px] flex items-center gap-[26px]'>
          {
            RecentlyDestinations.map((item, idx) => {
              return (
                <SmallCard key={idx} name={item.name} address={item.address} price={item.price} rating={item.rating} star={item.star} image={item.image} discount={item.discount} />
              )
            })
          }
      </div>
    </div>
  )
}

export default Recently