import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";

function Star({star,reviews}) {
   
    const reatingStar =   Array.from({length:5}, (value,index)=>{

        const number = index+0.5

        return(
            <>
                {
                    star>=index+1? <FaStar className='text-[#FEBD04]'/>:star>=number?<FaStarHalfStroke className='text-[#FEBD04]'/>:<AiOutlineStar className='text-[#FEBD04]'/>
                }
            </>
        )
    })

  return (
    <>
        <div className=''> 
            <div className='flex'>
                {reatingStar}
            </div>
            
            <div>
                <p>{reviews} customer reviews</p>
            </div>
            
        </div>
    </>
  )
}

export default Star