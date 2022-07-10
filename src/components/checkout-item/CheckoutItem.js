import React from "react";
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import { removeItem, addItem, arrowRemove } from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, removeItem, addItem, arrowRemove}) => {
    const{name , imageUrl, price, quantity } = cartItem
     return(
      <div className="checkout-item">
        <div className="image-container">
            <img alt='item' src={imageUrl} />
        </div>
        <span className="name">{name}</span>
        <div className="quantity">
            <div className="arrow" onClick={() => arrowRemove(cartItem)}>&#10094;</div>
              <span className="value">{quantity}</span> 
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </div>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
      </div>
  )
}

const mapDispatchToProps = dispatch => ({
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    arrowRemove: (item) => dispatch(arrowRemove(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)