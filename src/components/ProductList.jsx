
import React from 'react'
import { useFilterContax } from './FilterContax'
import GridView from './GridView'
import ListView from './ListView'


function ProductList() {
        const {grid_view, update_all_products} = useFilterContax()

   
        if(grid_view === true){
          return (
            <GridView productFilter={ update_all_products}/>
          )
        }
     

        if(grid_view === false){
            return(
              <ListView productFilter={ update_all_products}/>
            )
        }
  
}

export default ProductList