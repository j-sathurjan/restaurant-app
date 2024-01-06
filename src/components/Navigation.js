import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <ul className='links'>
        <li><a href='/'>HOME</a></li>
        <li><a href='/about'>ABOUT</a></li>
        <li><a href='/online-menu'>MENU</a></li>
        <li><a href='/booking-table'>RESERVATIONS</a></li>
        <li><a href='/order-online'>ORDER ONLINE</a></li>
        <li><a href='/login'>LOGIN</a></li>
    </ul>
  )
}

export default Navigation