import React, {useContext, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import {Button} from '../Button'
import { NavLink } from 'react-router-dom';
import { CardContax } from './Card_Contax';
import { useCardContax } from './Card_Contax';




function AddToCard({product}) {
    
    const {id,colors,stock}=product


    const [amount,setAmount]=useState(1)
    const [color,setColor]=useState(colors[0])


        const{addCardData,AddCart}=useCardContax()

    const setDecrese=()=>{
        amount > 1 ? setAmount(amount-1):setAmount(1)
    }

    const setIncrese =()=>{
        //amount < stock ? setAmount( amount+1):setAmount(stock)
    }

   

  return (
    <>
    <div className='flex items-center w-full h-10'>
    <p className=' space-x-3'>
    Colors:
        {
            colors.map((curColors,index)=>{
                return(
                    <>
                    
                        <button key={index} className=' w-5 rounded-full space-y-4 h-5 ml-2  cursor-pointer  hover:opacity-[1]'style={{backgroundColor:curColors}} onClick={()=>{setColor(curColors)}}>
                            
                        .
                        
                        {
                            color === curColors? <FaCheck className=' text-blue-500 opacity-[1]'/>:null  
                        }
                      

                        
                        </button>
                    </>
                )
            })
        }
    </p>
    </div>
    
    <div>
        <CartAmountToggle amount = {amount} setDecrese = {setDecrese} setIncrese = {setIncrese}/>
    </div>
    <NavLink to='/newcart'>
        <Button onClick={()=>{AddCart(id,colors,stock,product )}}  className='text-xs' >Add To Cart</Button>
    </NavLink>

    </>

    
  )
}

export default AddToCard