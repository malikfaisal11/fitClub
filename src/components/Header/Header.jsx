import React from 'react'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'





const Header = () => {
  return (
   <div className="header">

<div>
            <span className="logo">Gymnastics</span>
            <span className="logo2">Glimmer</span>
          </div>

<ul className='header-menu'>
 
  <li>Home</li>
  <li>About</li>
  <li>Classes</li>
  <li>Trainers</li>
  <li>Contact</li>
  <li>Products</li>
  <li> <FontAwesomeIcon icon={faCartShopping} /></li>
</ul>

   </div>
  )
}

export default Header