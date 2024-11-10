import React, { useContext } from 'react'
import { AppContax } from '../Productcontax'
import { NavLink } from 'react-router-dom'
import FormentPrice from './FormentPrice'



function FeatureProduct() {
    const {isLoding,featureProduct} = useContext(AppContax)


           
    

            if(isLoding){
             return <div>Loading</div>
            }
  return (
   <div className=' w-[72%] h-72  bg-[#EFEFEF] xs:h-[630px] sm:h-[630px] md:h-[450px] mx-auto  mt-5 '>
      <div className='w-[70%]  mx-auto  h-60 cursor-pointer xs:mt-3  grid place-items-center '>
        <p className=' text-[13px] text-blue-700 mt-4'>CHECK NOW</p>
        <h3 className=' text-2xl text-black mb-4'>Our Feature Survice</h3>
        <div className=' grid grid-cols-3 gap-7 xs:grid-cols-1 xs:grid-rows-[150px,150px,150px] xs:h-[400px] sm:grid-cols-1 sm:grid-rows-[150px,150px,150px] sm:h-[400px] md:w-full md:grid-cols-2 grid-rows-2 '> 
        {
          featureProduct.map((curElement)=>{
            return(
             <NavLink to={`/singleproduct/${curElement.id}`}>
             <div className=' w-48 h-40 bg bg-white'>
                <img src={curElement.image} className='p-2'/>
                <div className=' flex justify-around items-center ' >
                <p className='text-[12px'>{curElement.name}</p>
                  <p className=' text-[12px] text-blue-600'><FormentPrice price={curElement.price}/></p>
                  
                </div>
                
             </div>
             </NavLink>
            )

          })
        }

        </div>
      </div>
   </div>
  )
}

export default FeatureProduct