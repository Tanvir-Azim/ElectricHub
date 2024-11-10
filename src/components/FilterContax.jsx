import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContax } from "../Productcontax";
import reducer from './FilterReducer'



const FilterContax =createContext()

const initialState ={
    filter_products:[],
    all_products:[],
    grid_view:true,
    shorting_value:'lowest',
    filters: {
        text:"",
        category:"all",
        company:"all",
        colors:"all",
        maxPrice:0,
        price:0,
        minPrice:0,
    },
    update_all_products:[],
    
    
}

export const FilterContaxProvider =({children})=>{
    const {product} = useProductContax()

    const [state,dispatch]=useReducer(reducer,initialState)

    const setGridView =()=>{
        return dispatch({type:'SET_GRID_VIEW'})
    }

    const setListView =()=>{
        return dispatch({type:'SET_LIST_VIEW'})
    }

    const shorting=()=>{
        return dispatch({type:'SHORTING_DATA'})
    }

    useEffect(()=>{
        
        dispatch({
            type:'SORTING_PRODUCT_DATA',
            payload:product,
           
        })

        dispatch({
            type:"FILTER_PRODUCT",
        })

       

    },[product,state.shorting_value,state.filters])

    useEffect(()=>{

       
        dispatch({
            type:'LOAD_PRODUCT',
            payload:product,

        })
    },[product])

    

    const updateFilterValue =(event)=>{
        const value = event.target.value
        const name =event.target.value
        dispatch({
            type:"UPDATE_FILTER_VALUE",
            payload:{value,name}
        })
    }

    const updateFilterData = (event)=>{
        const value = event.target.value
        const name =event.target.name

        dispatch({
            type:"UPDATE_FILTER_DATA",
            payload:{value,name}
        })

    }
    const updateCompanyData = (event)=>{
        const value = event.target.value
        const name =event.target.name

        dispatch({
            type:"UPDATE_COMPANY_DATA",
            payload:{value,name}
        })
    }
    const updatePriceData = (event)=>{
        const value = event.target.value
        const name = event.target.name
      

        dispatch({
            type:"UPDATE_PRICE_DATA",
            payload:{value,name}
        })

        
    }

    const cleareFilters =()=>{
        dispatch({
            type:'CLEARE_FILTER'
        })
        console.log('clicked')
}
    return <FilterContax.Provider value={{...state,setGridView,setListView,shorting,updateFilterValue,updateFilterData,updatePriceData,updateCompanyData,cleareFilters}}>
        {children}
    </FilterContax.Provider>
}

export const useFilterContax = ()=>{
    return useContext(FilterContax)
}