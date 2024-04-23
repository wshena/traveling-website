import React from 'react'
import Slider from "react-slick";
import { AngleLeft, AngleRight } from '../utils/Icons';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={`absolute -right-[10px] top-[35%] bg-white z-20 p-[8px] rounded-full`}
      style={{
        boxShadow: '0px 4px 4px 0px rgba(121, 136, 155, 0.24)'
      }}
      onClick={onClick}
    > <AngleRight size={24} color='black' /> </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className={`absolute -left-[10px] top-[35%] bg-white z-20 p-[8px] rounded-full`}
      style={{
        boxShadow: '0px 4px 4px 0px rgba(121, 136, 155, 0.24)'
      }}
      onClick={onClick}
    > <AngleLeft size={24} color='black' /> </button>
  );
}

const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const Topup = () => {
  const topupArray = { length: 10 }
  const newTopupArray = Array.from(topupArray)

  return (
    <div className='container my-[80px]'>
      <h1 className="text-black font-bold text-[35.42px] mb-[53px]">Top up point</h1>
      
      <div className="">
        <Slider {...settings}>
          {newTopupArray.map((_, idx) => {
            return (
              <button>
                <img src='/image/topup.png' alt='topup' className='w-[100%] h-[100%]' />
              </button>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Topup