import React, {createContext, useContext} from 'react'
import { useState } from 'react'
import SHOP_DATA from '../shop-data.json'

const initial_state = {
    products: []
}
export const ProdcutsContext = createContext({
    ...initial_state
})

export const ProductsProvider =({children}) => {
  const[products, setProducts] = useState(SHOP_DATA)
 


  return (
    <ProdcutsContext.Provider value={{
        products,
        
        }}
        >
            {children}
    </ProdcutsContext.Provider>  )
}



