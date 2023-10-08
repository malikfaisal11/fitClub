
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  // Get the cart count from local storage
  const cartCount = parseInt(localStorage.getItem('cartCount') || 0, 10);
  return (
   <div className="header App">

<div>
            <span className="logo">Gymnastics</span>
            <span className="logo2">Glimmer</span>
          </div>

<ul className='header-menu'>
 
  <Link to={"/"}>Home</Link>
  <Link to={"/about"}>About</Link>
  <Link to={"/programs"}>Classes</Link>
  <Link to={"/contact"}>Contact</Link>
  <Link to={"/Products"}>Products</Link>

  {cartCount > 0 && (
          <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartCount}</span>
          </div>
        )}
 <li>
 <Link to="/login">
          <button  className='hero-button'>Join Us</button>
        </Link>
 </li>    
</ul>

   </div>
  )
}

export default Header;