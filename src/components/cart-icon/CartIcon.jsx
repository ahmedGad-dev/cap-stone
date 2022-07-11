import React, {useContext} from "react";
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from "../../context/cart.context";

const CartIcon = () =>{     
   const {setCartOpen, cartOpen, quantity} = useContext(CartContext) 

   const toggleCartIcon = () => {
    setCartOpen(!cartOpen)
   }

   return(
      <div className="cart-icon" onClick={toggleCartIcon}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">{quantity}</span>
      </div>
    )
}



export default CartIcon