import React from 'react'
import { NavLink } from 'react-router-dom'
import FormentPrice from './FormentPrice'

function GridView({productFilter}) {
  return (
    <>
    <div className=' grid grid-cols-3 gap-7 w-[790px] mt-2 place-items-center justify-around xs:grid-cols-2 xs:grid-rows-6 xs:w-[50%] xs:ml-[-30px] sm:grid-cols-2 sm:grid-rows-6 sm:w-[50%] sm:ml-16  md:grid-cols-2 md:grid-rows-6 md:w-[60%] '>
   
        {
          productFilter.map((curElement)=>{
            return(
             <NavLink to={`/singleproduct/${curElement.id}`}>
             <div className=' w-48 h-40 bg bg-white'>
                <img src={curElement.image} className='p-2'/>
                <div className=' flex justify-around items-center' >
                    <p className='text-[12px'>{curElement.name}</p>
                    <p className=' text-[12px] text-blue-600'><FormentPrice price={curElement.price}/></p>
                  
                </div>
                
             </div>
             </NavLink>
            )

          })
        }
          
        </div>
</>
  )
}

export default GridView