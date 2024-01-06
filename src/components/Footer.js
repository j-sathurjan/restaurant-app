import React from 'react';
import './Footer.css';
import Navigation from './Navigation'
import Logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-nav footer-navigation1'>
        <Link to='/'><img src={Logo} alt='Logo'/></Link>
      </div>
      <div className='footer-nav footer-navigation2'>
        <h4>Doormat Navigation</h4>
        <Navigation/>
      </div>
      <div className='footer-nav footer-navigation3'>
        <h4>Contact</h4>
        <p>Address <br/>Phone Number <br/>Email</p>
      </div>
      <div className='footer-nav footer-navigation4'>
        <h4>Social Media Links</h4>
        <p>Address <br/>Phone Number <br/>Email</p>
      </div>
    </footer>
  )
}

export default Footer