import React from 'react'
import { UilShoppingCartAlt, UilBars } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'
import { Container, Row} from 'reactstrap'
import user_icon from '../../assets/images/user-icon.png'
import '../Navbar/Navbar.scss'

import { motion } from 'framer-motion'

const Navbar = () => {

  const navlink =[
    {
        path:'home',
        display: 'Home'
    },
    {
        path:'shop',
        display: 'Shop'
    },
    {
        path:'cart',
        display: 'Cart'
    }
  ]   
  return (
    <header className='header'>
        <Container>
            <Row>
                <div className='nav-wrapper'>
                    {/* Store Title and Logo */}
                    <div className='nav-brand'>
                        <div className='store-logo'>
                            <UilShoppingCartAlt />
                        </div>
                        <h2 className='store-title'>Direct Mart</h2>
                    </div>

                    {/* Pages */}
                    <div className='nav-menu'>
                        <ul className='nav-items'>
                            {navlink.map((link, index)=> 
                                <li className='nav-item' key={index}>
                                    <NavLink to = {link.path} className={(navClass)=> navClass.isActive? 'nav-menu-active' : ''}>{link.display}</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Store Cart and Wishlist */}
                    <div className='nav-icons'>
                        <span>
                            <i class="uil uil-heart"></i>
                            <span className = 'icon-badge'>1</span>
                        </span>
                        <span>
                            <i class="uil uil-shopping-bag"></i>
                            <span className = 'icon-badge'>10</span>
                        </span>    
                        
                        <motion.img whileTap={{scale: 1.25 }} src={user_icon} alt='user icon'/>
                    </div>

                    {/* Mobile Menu */}
                    <div className='mobile-menu'>
                        <UilBars />
                    </div>
                </div>                     
            </Row>
        </Container>       
    </header>
  )
}

export default Navbar