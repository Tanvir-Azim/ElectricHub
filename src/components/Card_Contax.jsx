import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from './CardReducer'
import { json } from "react-router-dom";

const CardContax=createContext()
const localStorageData = ()=>{
    let updateCard = localStorage.getItem("tanvir");
    if(updateCard ==[]){
            return [];
    }else{
        return JSON.parse(updateCard)
    }

}
const initialState={
    card:localStorageData()
}


const CardProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)

   const addCardData=(id,color,amount,product)=>{
        dispatch({
            type:'ADD_TO_CARD',
            payload:{id,color,amount,product}
        })
    }

    const removeData =(id)=>{
        console.log(id)
        dispatch({
            type:"REMOVE_CARD",
            payload:id
        })
    }

    useEffect(()=>{
        localStorage.setItem("tanvir",JSON.stringify(state.card) )
    },[state.card])
    
    const cleareCart =()=>{
        dispatch({
            type:"CLEARE_CART"
        })
    }

    const AddCart=(id,color,amount,product)=>{
        dispatch({
            type:'AddCart',
            payload:{id,color,amount,product}
        })
    }
    return(
        <CardContax.Provider value={{...state,addCardData,removeData,cleareCart,AddCart}}>
            {children}
        </CardContax.Provider>
    )
}

const useCardContax =()=>{
    return useContext(CardContax)
}
export{CardContax,CardProvider,useCardContax}