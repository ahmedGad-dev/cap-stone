import React, {createContext, useState, useEffect} from 'react'


const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)   
  if(existingCartItem){
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
       {...cartItem, quantity: cartItem.quantity + 1} :
        cartItem )
  }
    return[...cartItems, {...productToAdd, quantity: 1}]    
}

export const CartContext = createContext({
   cartOpen: false,
   setCartOpen: () => {},
   cartItems: [],
   addItemToCart: () => {},
   quantity: 0,
   removeItem: () => {}
})

export const CartProvider = ({children})  => {
  const[cartOpen, setCartOpen] = useState(false)
  const[cartItems, setCartItems] = useState([])
  const[quantity, setQuantitiy] = useState(0)

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd ))
  }

  const increaseItemQuantitiy = () => {

  }

  const decreaseItemQuantitiy = () => {
     
  }

  const removeItem = (id) => {
    return cartItems.filter(item => item.id !== id)
  }


  useEffect(() => {
    const newQuantity = cartItems.reduce((total, nextItem) => {
      return total + nextItem.quantity
    }, 0)
    setQuantitiy(newQuantity)
  }, [cartItems])
 
  return(
    <CartContext.Provider value={{
        setCartOpen,
        cartOpen,
        addItemToCart,
        cartItems,
        quantity,
        removeItem
    }}>
        {children}
    </CartContext.Provider>
  )
}



