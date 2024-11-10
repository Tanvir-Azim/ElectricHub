import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Trusted from './Trusted';


function Survices() {
  return (
    <>
    <div className='w-[72%]  mx-auto grid grid-cols-3 grid-rows-1 h-52 gap-5 place-content-center items-center xs:grid-cols-1 xs:grid-rows-3 xs:mt-20'>
        <div className='bg-[#EFEFEF] h-40 w-full flex items-center flex-col justify-center gap-4  small:h-60 '>
            <div>
                <TbTruckDelivery className='text-[#676867] w-7 h-7 '/>
            </div>
            <div>
                <p className='ml-4 text-xs'>Super Fast and Free Delevery</p>
            </div>
        </div>

        <div className='bg-white h-40  grid   grid-cols-1  grid-rows-2  justify-between  gap-10 '>
            <div className='bg-[#EFEFEF] flex items-center justify-center gap-x-3'>
            
            <MdSecurity className='w-6 h-6 ml-3'/>
            <p className='text-xs'>Non Contact Shiping</p>
            </div>
            <div className='bg-[#EFEFEF]  flex items-center justify-center gap-x-3'>
            
                <GiReceiveMoney className='w-7 h-7 ml-3'/>
                <p className='text-xs'>Money Back Guaranted</p>
            </div>
        </div>
        <div className='bg-[#EFEFEF] h-40 flex items-center justify-center gap-x-3'>
            <RiSecurePaymentLine className='w-7 h-7 ml-3'/>
            <p className='text-xs'>Super Security Payment System</p>
        </div>
    </div>

    <div className=' h-full w-full my-24'>
        <Trusted/>

    </div>

    </>

  )
}

export default Survices