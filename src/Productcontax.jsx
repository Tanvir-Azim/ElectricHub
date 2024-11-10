import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './Reducer/productReducer'



const AppContax  = createContext()
//const API = 'https://product-surver-1.onrender.com/record'
const API = 'https://api.pujakaitem.com/api/products'

const initialState={
    isLoding:false,
    isError:false,
    product:[],
    featureProduct:[],
    isSingleLoading:false,
    singleProduct:{}

}



const AppProvider = ( {children} )=>{

    const [ state,dispath]=useReducer(reducer,initialState)

    const getProduct =async (url)=>{
        dispath({
            type:'SET_LAODING',
        })
      try {
          const res  = await axios.get(url)
          const result = res.data
          dispath({
              type:'SET_API_DATA',
              payload:result,
          })
      } catch (error) {
        dispath({
            type:'API_ERROR'
        })
        
      }

    }

    const getSingleProduct = async (url)=>{
        dispath({
            type:'SET_SINGLE_LOADING',
        })

       try {
         const res = await axios.get(url)
         const singleResult =await res.data

         dispath({
            type:'GET_SINGLE_RESULT',
            payload:singleResult
         })
       } catch (error) {
        dispath({
            type:'SINGLE_SINGLE_ERROR'
        })
        
       }

    }

    useEffect(()=>{
        getProduct(API)
    })

   
    return(
        <AppContax.Provider value={{ ...state, getSingleProduct}}>
            {children}       
        </AppContax.Provider>
    )
}

const useProductContax=()=>{
    return useContext(AppContax)
}



export {AppContax,AppProvider,useProductContax}