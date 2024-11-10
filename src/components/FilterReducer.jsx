import { textFieldClasses } from "@mui/material"
import { act } from "react"

const FilterReducer = (state,action)=>{

    if(action.type === 'LOAD_PRODUCT'){
        const heistData = action.payload.map((curElement)=>{
            return curElement.price
        })
        const  maxPrice = Math.max(...heistData)
        
        return{
            ...state,
            filter_products:[...action.payload],
             all_products:[...action.payload],
             filters:{...state.filters,maxPrice:maxPrice,price:maxPrice,
             }

        }
    }
    if (action.type === 'SET_GRID_VIEW'){
        return{
            ...state,
            grid_view:true,

        }
    }

    if (action.type === 'SET_LIST_VIEW'){
        return{
            ...state,
            grid_view:false,
        }
    }

    if(action.type === 'SHORTING_DATA'){

        const selectData = document.getElementById('short')

        const selectOption = selectData.options[selectData.selectedIndex].value
      
        
        return{
            ...state,
            shorting_value:selectOption,
           
            
        }
    }

    if(action.type === 'SORTING_PRODUCT_DATA'){
        let newShortData;
        let tempShortProduct=[...action.payload]

        if(state.shorting_value === 'a-z'){
            newShortData = tempShortProduct.sort((a,b)=>{
                return a.name.localeCompare(b.name)
            })
        }
        if(state.shorting_value === 'z-a'){
            newShortData = tempShortProduct.sort((a,b)=>b.name.localeCompare(a.name))
        }

        if(state.shorting_value === 'heist'){
            newShortData = tempShortProduct.sort((a,b)=>{
                return a.price-b.price
            })
        }

      return{
        ...state,
        filterProducts:newShortData
      }


      
      
    }

    if(action.type === "UPDATE_FILTER_VALUE"){

        const{value,name}=action.payload
        return{

            ...state,
            filters:{
                ...state.filters,
                text:value,
                
                
            }
        }
          
    }

    if(action.type === "UPDATE_FILTER_DATA"){
        const{value,name}= action.payload

        return{

            ...state,
            filters:{
                ...state.filters,
                [name]:value,
                
                
            }
        }
          
    }

    if(action.type === "UPDATE_PRICE_DATA"){
        const{value,name}= action.payload

        return{

            ...state,
            filters:{
                ...state.filters,
                [name]:value,
                
                
            }
        }
          
    }

    if(action.type === "UPDATE_COMPANY_DATA"){
        const{value,name}= action.payload

        return{

            ...state,
            filters:{
                ...state.filters,
                [name]:value,
                
                
            }
        }

    }

    if(action.type === "FILTER_PRODUCT"){
        let {all_products}= state;
        let tempFilterProduct = [...all_products];

        let{text,category,company,colors,price}=state.filters

        //let UpdateFilterProduct
        // onn name varible dicler kore filter k rakte parse na keno tempFilterProduct name e keno rakhte hobe

        if(text){
            tempFilterProduct = tempFilterProduct.filter((curElement)=>{
                return curElement.name.toLowerCase().includes(text)
            })
        }

        if(category!=="all"){
            tempFilterProduct = tempFilterProduct.filter((curElement)=>{
                return curElement.category === category
            })
        }

        if(company!=="all"){
            tempFilterProduct = tempFilterProduct.filter((curElement)=>{
                return curElement.company.toLowerCase() === company.toLowerCase()
            })
        }

        if(colors!=="all"){
            tempFilterProduct = tempFilterProduct.filter((curElement)=>{
                return curElement.colors.includes(colors)
        })
        }
        if(price){
            tempFilterProduct = tempFilterProduct.filter((curElement)=>{
                return curElement.price <= price
            })
        }
   
        return {
            ...state,
            update_all_products:tempFilterProduct,
        }
    }

    if (action.type === 'CLEARE_FILTER'){

        return{
            ...state,
            filters: {
                text:"",
                category:"all",
                company:"all",
                colors:"all",
                maxPrice:0,
                price:0,
                minPrice:0,
            },
        }
    }

    return state
}


export default FilterReducer