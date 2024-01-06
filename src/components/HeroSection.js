import './HeroSection.css';
import React from 'react';
import HeroImg from '../assets/restauranfood.jpg';

function HeroSection() {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <span><a href='/booking-table'>Reserve a Table</a></span>
      </div>
      <div className='hero-image'>
        <img src={HeroImg} alt='heroImage'/>
      </div>
    </div>
  )
}

export default HeroSection