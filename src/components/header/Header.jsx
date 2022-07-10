import React, {Fragment, useContext} from 'react'
import './header.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useUserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartContext } from '../../context/cart.context'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropDown'
const Header = ()=> {
  const {currentUser, setCurrentUser} = useUserContext()
  const {cartOpen} = useContext(CartContext)

  const signOutHandler = async() => {
     await signOutUser()
     setCurrentUser(null)
  }
  
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/shop'>SHOP</Link>
            {currentUser?(
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>) : 
              (<Link className='nav-link' to='/authentication'> SIGN IN </Link>) 
            }   
           <CartIcon/>
        </div>
           {cartOpen? <CartDropdown/> : null}
      </div>
      <Outlet/>
    </Fragment>   
  )
}

export default Header