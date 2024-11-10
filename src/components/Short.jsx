import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { useFilterContax } from './FilterContax';


function Short() {
  const {grid_view,setGridView,setListView,filter_products,shorting,shorting_value}=useFilterContax()

  


  return (
   <div className='w-full flex h-full items-center justify-between xs:w-[60%] sm:w-[70%] sm:ml-16 md:w-[60%] '>
      <div className=' flex justify-around gap-4 ml-1'>
          <div className=' w-7 bg-gray-300 h-7 grid place-items-center'>
            <button className={grid_view ? 'bg-black text-white w-7 h-7 grid place-items-center': 'bg-gray-300'} onClick={setGridView}><BsFillGridFill className=' text-[15px]'/></button>
          </div>
          <div className=' w-7 bg-gray-300 h-7 grid place-items-center'>
            <button className={!grid_view?'bg-black text-white w-7 h-7 grid place-items-center': 'bg-gray-300'} onClick={setListView}><BsList/></button>
          </div>
      </div>

      <div>
        <p>{`${filter_products.length} Product Available`}</p>
      </div>

      <div>
        <form action='#' >
          <label htmlFor='short'>
            <select name='short' id='short' className=' p-1 bg-gray-200' onClick={shorting}>
              <option value='lowest'>Price(lowest)</option>
              <option value='#' disabled></option>
              <option value='heist'>Price(height)</option>
              <option value='#' disabled></option>
              <option value='a-z'>Price(a-z)</option>
              <option value='#' disabled></option>
              <option value='z-a'>Price(z-a)</option>
            </select>
          </label>
        </form>
      </div>
   </div>
  )
}

export default Short