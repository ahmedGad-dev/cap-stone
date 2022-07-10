import React from 'react'
import './productcard.styles.scss'
import CustomButton from '../custom-button/CustomButton'

const ProductCart = ({product}) => {
    const {name, price, imageUrl} = product
  return (
    <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton buttonType='inverted'>ADD TO CART</CustomButton>
    </div>
  )
}

export default ProductCart