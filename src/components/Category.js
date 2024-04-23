import React from 'react'
import { Categories } from '../utils/const'

const Category = () => {
  return (
    <div className='text-white text-[16px] py-[55px] flex items-center gap-[12px]'>
      <span>View Categories</span>
      <div className='grid grid-cols-6 gap-[12px]'>
        {
          Categories.map((item, idx) => {
            return (
              <button key={idx} className='bg-white-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 py-[9px] px-[27px]'>{item.title}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default Category