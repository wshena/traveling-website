import React, { useState } from 'react'
import { AngelDown } from '../utils/Icons';
import { FaAngleUp } from 'react-icons/fa';
import { Nominal } from '../utils/const';

const Dropdown = () => {
  const [isClick, setIsClick] = useState(false);
  const [nominal, setNominal] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    setIsClick(!isClick);
  }

  const handleOffClick = (e, nominal) => {
    e.preventDefault();
    setIsClick(false);
    setNominal(nominal)
  }

  return (
    <div className='flex flex-col gap-[11px] relative'>
      <span className='text-[16px] w-[480px]'>Nominal</span>
      <button onClick={handleClick} className='cursor-pointer border rounded-[11px] p-[16px] flex items-center justify-between'>
        <span className='text-[16px]'>{nominal ? nominal : 'select'}</span>
        {isClick ? <FaAngleUp size={24} color='black' /> : <AngelDown size={24} color='black' />}
      </button>

      <div className={`bg-white rounded-[10px] absolute w-fit text-black flex items-center flex-wrap transition-all duration-500 ease-in-out left-0 ${isClick ? 'top-[100px] opacity-100' : '-top-[250px] opacity-0'}`} style={{
        boxShadow: '0px 4.43px 17.71px 0px rgba(158, 158, 158, 0.25)'
      }}>
        {
          Nominal.map((item, idx) => {
            return (
              <button onClick={(e) => {
                handleOffClick(e, item);
              }} key={idx} className='p-[1rem] hover:bg-gray-300'>{item}</button>
            )
          })
        }
      </div>
    </div>
  )
}

const TabsContent = ({content}) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value)

  return (
    <form className='flex items-end justify-between'>
      <div className='flex flex-col gap-[11px]'>
        <label for='number' className='text-[16px] w-[480px]'>{content} Number</label>
        <div className='border rounded-[11px] p-[16px] flex items-center justify-between'>
          <input type='number' placeholder='Phone number' value={value} onChange={handleChange} autoComplete='off' className='focus:outline-none'/>
          <img src='/image/Logo_IM3.png' alt='logo' />
        </div>
      </div>

      <Dropdown />
      
      <div>
        <button className='w-[133px] border-none bg-[#235FD2] rounded-[11px] py-[14px] px-[25px] text-white'>Buy</button>
      </div>
    </form>
  )
}

const Tabs = [
  {
    title: 'Pulsa',
    content: <TabsContent content={'Phone'} />
  },
  {
    title: 'Game',
    content: <TabsContent content={'Game'}/>
  },
  {
    title: 'Paket',
    content: <TabsContent content={'Peket'}/>
  },
  {
    title: 'PLN Prepaid',
    content: <TabsContent content={'PLN'}/>
  },
  {
    title: 'E-wallet',
    content: <TabsContent content={'E-wallet'}/>
  },
  {
    title: 'Pascabayar',
    content: <TabsContent content={'Pasca'}/>
  },
  {
    title: 'BPJS',
    content: <TabsContent content={'BPJS'}/>
  },
  {
    title: 'PDAM',
    content: <TabsContent content={'PDAM'}/>
  },
  {
    title: 'PLN Postpaid',
    content: <TabsContent content={'PLN Post'}/>
  },
  {
    title: 'Internet',
    content: <TabsContent content={'Internet'}/>
  },
  {
    title: 'TV',
    content: <TabsContent content={'TV'}/>
  },
]

const PaymentAndBill = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='container'>
      <h1 className="text-black font-bold text-[35.42px] mb-[53px]">Payment & Bill</h1>
      <div className='w-[100%] border rounded-[20px] py-[30px]'>
        <div className='px-[10px] flex items-center border-b-2 gap-[49px]'>
          {
            Tabs.map((item, idx) => {
              return <button onClick={() => {handleTabClick(idx)}} key={idx} className={`text-[18px] pb-[14px] border-b-2 ${activeIndex === idx ? 'text-[#235FD2] border-b-blue-600 font-bold' : 'text-[#7A93BD] border-none'}`}>{item.title}</button>
            })
          }
        </div>

        <div className='p-[35px]'>{Tabs[activeIndex].content}</div>
      </div>
    </div>
  )
}

export default PaymentAndBill