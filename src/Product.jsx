import React from 'react'
import ProductList from './components/ProductList'
import Short from './components/Short'
import FilterSection from './components/FilterSection'


function Product() {


  return (
    <div  className='grid grid-cols-[0.3fr,1fr] gap-7 h-full mt-3 w-[1100px] mx-auto xs:grid-cols-1 xs:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2'>
    
          <div className=' border-[1px] border-gray-200 xs:h-[600px]'>
            <FilterSection/>
          </div>

          <div className=' grid grid-rows-[50px,1fr] border-[1px] border-gray-200 pb-2 xs:mt-[-250px] sm:mt-[-280px]'>
              <div className=' w-[800px]'>
                  <Short/>
              </div>
              <div className=''>
                  <ProductList/>
              </div>

        
           </div>
        
    </div>


    
  
  )
}

export default Product