import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton'

import { useNavigate } from "react-router-dom";


const CartDropdown = ({cartItems}) => {
    let navigate = useNavigate();
    return(
        <div className='cart-dropdown'> 
            <div className='cart-items'>
             
            </div>
            <CustomButton onClick={() =>{
              navigate('/checkout');
           
            }
              }>GO TO CHECKOUT</CustomButton>           
        </div>
    )
}


export default CartDropdown

