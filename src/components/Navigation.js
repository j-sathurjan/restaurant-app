import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/online-menu'>MENU</Link></li>
            <li><Link to='/booking-table'>RESERVATIONS</Link></li>
            <li><Link to='/order-online'>ORDER ONLINE</Link></li>
            <li><Link to='/login'>LOGIN</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation