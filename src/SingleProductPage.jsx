import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useProductContax } from './Productcontax'
import FormentPrice from './components/FormentPrice'
import { FaTruckFast } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { TbReplace } from "react-icons/tb";
import Images from './components/Images';
import Star from './components/Star';
import AddToCard from './components/AddToCard';

//const API = 'https://webapi-c7j0.onrender.com/record'
//const API = 'https://product-surver-1.onrender.com/record'
const API = 'https://api.pujakaitem.com/api/products'
function SingleProductPage() {
const {  isSingleLoading,singleProduct,getSingleProduct }= useProductContax()


  const {id} = useParams()


  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`)
  },[])

  const {company,
    category,
    description,
    name,
    price,
    reviews,
    stars,
    stock,
    id:sid,
    image,

}=singleProduct
  
  return (
    <>
        <div className=' w-[100%] h-[88vh] gap-12 flex xs:flex-col sm:flex-col   xs:mt-80 sm:mt-80  md:mt-[190px] lg:mt-[250px] pt-1 justify-center items-center xl:mt-[40px] '>
          <div className=' w-[23%]  h-[43vh]'>
            <div>
              <div>
                  <Images imgs={image}/>
              </div>
            </div>
          </div>

          <div className='w-[25%] h-[65vh] xs:h-[75vh] lg:ml-32  xs:w-[60%] sm:w-[60%] md:w-[40%] md:ml-32 xs:mb-72 sm:mb-[400px] md:mb-[400px]  items-center lg:w-[40%] lg:pl-4 lg:mb-[400px] '>
            <p className='text-2xl p-1'>{name}</p>
            <Star star={stars} reviews={reviews}/>
          
            <div className=' font-bold text-[11px]'>
               MRP:
              <del>
                <FormentPrice  price={price+250000} />
              </del>
              <p className=' mt-3'>{description}</p>
           
            </div>

            <div className='flex justify-between items-center mt-2'>
              <div className='flex flex-col items-center '>
                <div className='bg-[#EFEFEF] rounded-full w-6 h-6 flex items-center justify-center'>
                  <FaTruckFast className=' w-18 h-5 text-xl '/>
                </div>
                  <p className='text-[11px]'>Free Delevery</p>
              </div>

              <div className='flex flex-col items-center'>
              <div className='bg-[#EFEFEF] rounded-full w-6 h-6 flex items-center justify-center'>
                    <TbReplace className='w-18 h-5 text-xl'/>
                </div>
                 
                  <p className='text-[11px]'>30 Days Replacement</p>
              </div>

              <div className='flex flex-col items-center '>

              <div className='bg-[#EFEFEF] rounded-full w-6 h-6 flex items-center justify-center'>
                  <FaTruckFast className=' w-18 h-5 text-xl'/>
                </div>
                  <p className='text-[11px]'>Tanvir Deleveryed</p>
              </div>


              <div className='flex flex-col items-center '>

              <div className='bg-[#EFEFEF] rounded-full w-6 h-6 flex items-center justify-center'>
              <MdSecurity className='w-18 h-5 text-xl'/>
                </div>
                 
                  <p className='text-[11px]'>2Year Warranty</p>
              </div>



            </div>

            <div>
              <p className=' mt-1'>Available: <span className=' font-medium'>{stock>0?'In Stock':'Not Available'}</span></p>
            </div>
            
            <p className='p-1'>ID: <span className='font-medium'>{id}</span></p>

            <p>Brand: <span className='font-medium'>{company}</span> </p>

            <hr className=' border-gray-500 mt-3'/>

            {
              stock > 0 && <AddToCard product={singleProduct}/>
            }
        </div>

        </div>
    </>
  
  )
}

export default SingleProductPage