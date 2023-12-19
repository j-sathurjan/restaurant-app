import React from 'react'
import HeroImg from '../assets/restauranfood.jpg'

function HeroSection() {
  return (
    <div className='hero-section'>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <span><a href='/'>Reserve a Table</a></span>
      <img src={HeroImg} alt='heroImage' height='349px' width='331px'/>
    </div>
  )
}

export default HeroSection