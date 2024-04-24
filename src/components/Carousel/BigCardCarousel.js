import React from 'react'
import { useRef, useState } from "react";
import BigCard from '../Cards/BigCard';
import { Offers } from '../../utils/const';

const BigCardCarousel = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const deltaX = event.clientX - startX;
    carouselRef.current.scrollLeft = scrollLeft - deltaX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="ml-[80px] overflow-x-auto cursor-grab"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ scrollSnapType: 'x mandatory', scrollSnapAlign: 'center', scrollbarWidth: 'none' }}
    >
      <div className="w-fit pr-[50px] flex items-center gap-x-[26px] pb-[30px]">
        {
          Offers.map((item, idx) => {
            return (
              <BigCard type={item.type} title={item.title} image={item.image} description={item.description} key={idx}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default BigCardCarousel