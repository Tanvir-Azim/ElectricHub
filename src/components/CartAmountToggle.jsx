import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function CartAmountToggle({amount,setIncrese,setDecrese}) {

  return (
    <div className='flex items-center'>
      <button onClick={()=>{setDecrese()}} className=' p-3'><FaMinus className='h-3'/></button>
      {amount}
      <button onClick={()=>{setIncrese()}} className=' p-3'><FaPlus className='h-3'/></button>
    </div>
  )
}

export default CartAmountToggle