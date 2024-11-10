import { data } from "autoprefixer";
import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
//import reducer from "../components/reducer";

const AppContaxt= createContext()

const API = 'https://api.pujakaitem.com/api/products'



const AppProvider=({children})=>{

    const [data,getData]=useState([])

    const getProduct= async (url)=>{

             const res = await axios.get(url)
             const  products = await res.data

             getData(products)
        
        
    } 

    console.log(data)
            
        
    
    useEffect(()=>{
        getProduct(API)
    },[])


    return(
    <AppContaxt.Provider value={{...data}}>
        {children}
    </AppContaxt.Provider>

    )
}

export {AppProvider,AppContaxt}

