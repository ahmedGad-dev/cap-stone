import React, {createContext, useState} from 'react'

export const CartContext = createContext({
   
})

export const CartProvider = ({children})  => {
  const[cartOpen, setCartOpen] = useState(false)
  return (
    <CartContext.Provider value={{
        setCartOpen,
        cartOpen
    }}>
        {children}
    </CartContext.Provider>
  )
}


