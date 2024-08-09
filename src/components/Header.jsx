import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
import Context1 from './MYContext';
import CartContext from './CartContext';
const Header = () => {
    const {cart } =useContext(CartContext)
  return (
      <div className='Navbar'>
          <div className='logo'>Mobile Shop</div>
          <ul>
              <li>
                  <Link to ={'/home'}>HOME</Link>
              </li>
              <li>
                  <Link to={'/cart'}> <span className='cart-count'>{cart.length }</span>CART</Link>
              </li>
        </ul>
     </div>
  )
}

export default Header
