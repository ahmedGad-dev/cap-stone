import React, {useContext} from "react";
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import { CartContext } from "../../context/cart.context";

const CheckOut = () => {
    const {cartItems} = useContext(CartContext)


   return(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>product</span>
            </div>
            <div className="header-block">
                <span>description</span>
            </div>
            <div className="header-block">
                <span>quantity</span>
            </div>
            <div className="header-block">
                <span>price</span>
            </div>
            <div className="header-block">
                <span>remove</span>
            </div>
        </div>

        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className="total">
            <span>Total: </span>
        </div>
    </div>
  )
}

export default CheckOut