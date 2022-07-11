import React, {useContext} from "react";
import './checkout-item.styles.scss'
import { CartContext } from "../../context/cart.context";


const CheckoutItem = ({cartItem}) => {
    const {removeItem} = useContext(CartContext)
    const{name , imageUrl, price, quantity, id } = cartItem
    const remove = () => removeItem(id)
     return(
      <div className="checkout-item">
        <div className="image-container">
            <img alt='item' src={imageUrl} />
        </div>
        <span className="name">{name}</span>
        <div className="quantity">
            <div className="arrow" >&#10094;</div>
              <span className="value">{quantity}</span> 
            <div className="arrow" >&#10095;</div>
        </div>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => remove} >&#10005;</div>
      </div>
  )
}


export default CheckoutItem