const CardReducer=(state,action)=>{

    if(action.type ==="ADD_TO_CARD"){
        const{product,id,color,amount,}=action.payload
       
        let existingProduct;
        existingProduct = state.card.filter((curElement)=>{ return curElement.id === id+color});

        console.log(existingProduct)

        let cartProduct
         cartProduct ={
            id:id+color,
            name:product.name,
            color,
            amount,
            image:product.image[0].url,
            price:product.price,
            max:product.stock
        }
        return{
            ...state,
            card:[...state.card,cartProduct]
        }
    }

    if (action.type === "REMOVE_CARD"){

        let updateCard;
        updateCard=state.card.filter((curElement)=>curElement.id !==action.payload)
        return{
            ...state,
            card:updateCard
        }
    }
    if(action.type === "CLEARE_CART"){
        return{
            ...state,
            card:[],
        }
    }
    if(action.type === 'AddCart'){
        const{id,colors,stock,product}=action.payload
        console.log(id,colors,stock,product)
        return{
            ...state,
        }
    }
    return state
}

export default CardReducer