import React, {useContext} from 'react'
import './ShopPage.styles.scss'
import { ProdcutsContext  } from '../../context/products.context'
import ProductCard from '../../components/product-card/ProductCard'

const Shop = () =>{
   const {products} = useContext(ProdcutsContext)
   
   return(
      <div className='products-container'> 
         {products.map( product => (
           <ProductCard product={product} key={product.id}/>      
         ))}
      </div>
     )
  }  

export default Shop

