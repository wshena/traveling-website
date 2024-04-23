import React from 'react'
import SmallCard from './Cards/SmallCard'
import { Destinations } from '../utils/const'
import Slider from "react-slick";

const Popular = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='my-[80px]'>
      <div className='container'>
        <h1 className="text-black font-bold text-[35.42px] mb-[53px]">Explore popular destinations</h1>
      </div>
      <div className='ml-[75px]'>
        <Slider {...settings}>
          {
            Destinations.map((item, idx) => {
              return (
                <SmallCard key={idx} name={item.name} address={item.address} price={item.price} rating={item.rating} star={item.star} image={item.image} discount={item.discount} />
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Popular