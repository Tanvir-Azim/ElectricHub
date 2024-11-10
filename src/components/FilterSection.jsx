import React from 'react'
import { useFilterContax } from './FilterContax'
import { FaCheck } from "react-icons/fa"
import FormentPrice from './FormentPrice'
import { Button } from '../Button'


function FilterSection() {
  const {filters:{text,category,compay,colors,price,minPrice,maxPrice},updateFilterValue,all_products,updateFilterData,updateCompanyData,updatePriceData,cleareFilters}=useFilterContax()


  //const singleData = price.map((curElement)=>{return curElement.price})

  
  const getUniqueData=(data,property)=>{
   let newVal = data.map((currentElement)=>{
      return currentElement[property]
    })
    if(property === "colors"){
      return newVal =["all", ...new Set([].concat(...newVal))];
    }else {
      return newVal=["all", ...new Set(newVal)]
    }
  }
  const catagoryData = getUniqueData(all_products,"category")
  const companyData = getUniqueData(all_products,"company")
  const colorsData = getUniqueData(all_products,"colors")


 
  return (
    <div className=' ml-4 mb-2 h-full'>
    <div className=' mt-3'>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type='text' name='text' value={text} onChange={updateFilterValue} placeholder='SEARCH' className='  bg-gray-200 pl-3'/>
      </form>
    </div>

    <div className=''>
    <h3 className=' font-medium mt-3'>Category</h3>
      {
        catagoryData.map((curElement,index)=>{
          return(
            <button key={index} type='button' name='category' value={curElement} onClick={updateFilterData} className='w-[100px] h-[20px]  text-lg flex flex-col  mt-3'>
            
              {curElement}
            </button>
          )
        })
      }
    </div>

    <div className=' mt-8'>
    <h3 className=' font-medium mt-3'>Company</h3>
      <form action='#'>
      <select name='company' id='company'onClick={updateCompanyData} className=' w-36 bg-gray-200'>
      {
        companyData.map((curElement,index)=>{
          return <option value={curElement} key={index} name="company" >{curElement}</option>
        })
      }

      </select>

      </form>
    </div>


    <div className=' mt-3'>
    <p className=' font-medium'>Colors:</p>
    <div className='w-full flex justify-around items-center mt-1'>


    
      {
        colorsData.map((curElement)=>{

          if(curElement === "all"){
            return <button type='button' name='colors' value={curElement}  onClick={updateCompanyData} className=' w-7 h-7  bg-gray-200  rounded-full'>All</button>
          }
          return <button type='button' name='colors' value={curElement} style={{backgroundColor:curElement}} onClick={updateCompanyData} className={colors ===curElement?"w-5 h-5  rounded-full  opacity-90 hover:opacity-100":"w-5 h-5  rounded-full"}>{colors === curElement?<FaCheck className=' text-white'/>:null}</button>
        })
      }
    </div>
    </div>

    <div className=' mt-5'>
      <p className=' font-medium'>Price</p>
      <p><FormentPrice price={maxPrice}/></p>
      <input type='range' name='price' value={price}  min={minPrice} max={maxPrice} onChange={updatePriceData} className=' w-[70%]'/>
    </div>

    <Button className=' w-24 bg-red-600 text-black' onClick={cleareFilters}>
        CLEARE
    </Button>
    </div>
  )
}

export default FilterSection