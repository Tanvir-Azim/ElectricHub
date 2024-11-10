import React from 'react'
import FormentPrice from './FormentPrice'
//import { NavLink } from 'react-router-dom'
//import FormentPrice from './FormentPrice'
import {Button} from '../Button'
import { NavLink } from 'react-router-dom'

function ListView({productFilter}) {
 
  return (
    <>
      <div>
      {
        productFilter.map((curElement)=>{
          return(
            <>
            
              <div className=' w-full grid grid-cols-[1fr,1fr] grid-rows-1 gap-3 mt-5  place-items-center justify-around'>
                  <div className=''>
                      <img src={curElement.image} alt={curElement.name} className='w-[280px]'/>
                  </div>
                  
            
                  <div className='w-[350px]'>
                      <h3 className=' font-bold'>{curElement.name}</h3>
                      <p className='mt-2'>{<FormentPrice price={curElement.price}/>}</p>
                      <p>{curElement.description.slice(0,99)}...</p>
                      <NavLink to={`/singleproduct/${curElement.id}`}>
                        <Button className=' mt-4  text-sm'>Read More</Button>
                      </NavLink>

                     
                  </div>
            

              </div>
              <hr className=' border-y-[1.2px] border-gray-500 mt-4'/>

            </>
          )
          
        })
      }
      </div>
    </>
   
  )
}

export default ListView