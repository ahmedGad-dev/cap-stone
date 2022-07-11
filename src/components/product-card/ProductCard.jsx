import React, {useContext} from 'react'
import './productcard.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import { CartContext } from '../../context/cart.context'



const ProductCart = ({product}) => {
  const {name, price, imageUrl} = product
  const {addItemToCart} = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton buttonType='inverted' onClick={addProductToCart}>ADD TO CART</CustomButton>
    </div>
  )
}

export default ProductCart