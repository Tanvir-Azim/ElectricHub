const ProductReducer = (state,action)=>{
    if(action.type === "SET_LOADING"){
        return{
            ...state,
            isLoding:true,
        }
    }

    if(action.type === "SET_API_DATA"){
        const featureData =action.payload.filter((curElement)=>{
            return curElement.featured === true     
        })
        return{
            ...state,
            isLoding:false,
            product:action.payload,
            featureProduct:featureData,
        

        }
    }

    if(action.type === "API_ERROR"){
        return{
            ...state,
            isLoding:false,
            isError:true,

        }
    }

    if(action.type ==='SET_SINGLE_LOADING'){
        return{
            ...state,
            isSingleLoading:true,

        }
    }

    if(action.type ==="GET_SINGLE_RESULT"){
        return{
            ...state,
            isSingleLoading:false,
            singleProduct:action.payload,
        }
    }

    if(action.type ==="GET_SINGLE_RESULT"){
        return{
            ...state,
            isSingleLoading:false,
            isError:true,
        }
    }
    return state

}

export default ProductReducer;