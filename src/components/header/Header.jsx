import React, {Fragment} from 'react'
import './header.styles.scss'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ()=> {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo'/>
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/shop'>SHOP</Link>
          <Link className='nav-link' to='/authentication'>Sign In</Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>   
  )
}

export default Header