import React from 'react'
import { NavLink } from 'react-router-dom'

function HeroSection({mydata}) {
    const{name,img}=mydata
    
  return (
    <div className='w-[72%] flex mx-auto h-52 justify-center items-center xs:flex-col  xs:h-[70vh] xs:w-full bg-[#EFEFEF] mt-6'>
        <div className='w-[50%] place-content-center grid gap-2 p-5 bg-[#EFEFEF]'>
            <p className=' uppercase text-xs  leading-3 text-gray-600'>Welcome to</p>
            <h1 className='text-3xl font-bold '>{name}</h1>
            <p className='justify-items-center text-xs text-gray-600'>Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Sed laoreet nisi at elit venenatis fringilla. 
             Cras ut semper quam, sit.</p>
             <NavLink to='/products'>
                <button className='bg-blue-500 px-2 py-0.5 text-white w-28'>SHOP NOW </button>
             </NavLink>
             
        </div>

        <div className='w-[50% h-auto'>
            <img src={img} className='w-60'/>
        </div>
    </div>
  )
}

export default HeroSection