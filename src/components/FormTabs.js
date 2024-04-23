import React, { useState } from 'react'
import {FlightsForm, BookingForm} from './BookingForm'
import { Airplane, Bed } from '../utils/Icons'

const Tabs = [
  {
    title: 'Flights',
    icon: <Airplane size={24} color='white' />,
    content: <FlightsForm />
  },
  {
    title: 'Stays',
    icon: <Bed size={24} color='white' />,
    content: <BookingForm />
  },
]

const TabsButton = ({ title, icon, active, onClick }) => {
  return (
    <button onClick={onClick} className={`text-[18px] flex items-center gap-[8px] pb-[15px] ${active && 'border-b-2 border-blue-500'}`}>
      {icon}
      <span>{title}</span>
    </button>
  );
};

const FormTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };
  
  return (
    <div className='text-white'>
      <div className='flex items-center gap-[30px]'>
        {Tabs.map((tab, index) => (
          <React.Fragment key={index}>
            <TabsButton
              title={tab.title}
              icon={tab.icon}
              active={activeIndex === index}
              onClick={() => handleTabClick(index)}
            />
            {index < Tabs.length - 1 && <span className='block w-[1px] h-[50px] bg-white'></span>}
          </React.Fragment>
        ))}
      </div>

      <div className='mt-[31px]'>{Tabs[activeIndex].content}</div>
    </div>
  );
}

export default FormTabs