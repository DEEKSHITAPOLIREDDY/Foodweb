import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
const Navbar = () => {
    const {cartItems }= useCart()

  return (
    <>
    <div className="navsection">
        <div className="title">
            <h2>Food-Web</h2>
        </div>
        <div className="search">
            <input type="text" placeholder='search..' />

        </div>
        <div className="user">
            <div className="user-details">
                <Link to='/logout'>Logout</Link>
            </div>
            <Link to='/cart'>
            <div className="cart">
                CART
                <span>
            {cartItems.length}
          </span>
            </div>
            </Link>
            
        </div>
    </div>
    <div className="submenu">
        <ul>
            <Link to='/nonvegbiryani'>
            <li>Nonvegbiryani</li>
            </Link>
            <Link to='/nonvegsoups'>
            <li>Nonvegsoups</li>
            </Link>
            <Link to='/nonvegstarters'>
            <li>Nonvegstarters</li>
            </Link>
            <Link to='/parotas'>
            <li>Parotas</li>
            </Link>
            <Link to='/pulkas'>
            <li>Pulkas</li>
            </Link>
            <Link to='/vegbiryani'>
            <li>Vegbiryani</li>
            </Link>
            <Link to='/vegsoups'>
            <li>Vegsoups</li>
            </Link>
            <Link to='/vegstarters'>
            <li>Vegstarters</li>
            </Link>           
        </ul>
    </div>
    </>
  )
}

export default Navbar