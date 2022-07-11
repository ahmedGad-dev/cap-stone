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

const decreaseItemFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id) 

  if(existingCartItem.quantity === 1){
     return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }
  
  return cartItems.map(cartItem => cartItem.id === productToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1} :
         cartItem )
}


// clear the cart item from cart
const clearItem = (cartItems, product) => {
  return cartItems.filter(cartItem => cartItem.id !== product.id )
}

export const CartContext = createContext({
   cartOpen: false,
   setCartOpen: () => {},
   cartItems: [],
   addItemToCart: () => {},
   quantity: 0,
   removeItemFromCart: () => {},
   clearItemFromCart: () => {},
   cartTotal: 0,
})

export const CartProvider = ({children})  => {
  const[cartOpen, setCartOpen] = useState(false)
  const[cartItems, setCartItems] = useState([])
  const[quantity, setQuantitiy] = useState(0)
  const[cartTotal, setCartTotal] = useState()

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd ))
  }

  const removeItemFromCart = (product) => {
    setCartItems(decreaseItemFromCart(cartItems, product))
  }

  const clearItemFromCart = (product) => {
    setCartItems(clearItem(cartItems, product))
  }
  

  useEffect(() => {
    const newQuantity = cartItems.reduce((total, nextItem) => {
      return total + nextItem.quantity
    }, 0)
    setQuantitiy(newQuantity)
  }, [cartItems])


  useEffect(() => {
    const newTotal = cartItems.reduce((total, nextItem) => {
      return total + nextItem.quantity * nextItem.price
    }, 0)
    setCartTotal(newTotal)
  }, [cartItems])


 
  return(
    <CartContext.Provider value={{
        setCartOpen,
        cartOpen,
        addItemToCart,
        cartItems,
        quantity,
        removeItemFromCart,
        clearItemFromCart,
        cartTotal
    }}>
        {children}
    </CartContext.Provider>
  )
}



