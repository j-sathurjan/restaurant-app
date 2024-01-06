import React from 'react'
import HeroSection from './HeroSection'
import Highlight from './Highlight'
import Testimonials from './Testimonials'
import About from './About'

function Home() {
  return (
    <main className='main-container'>
      <HeroSection/>
      <Highlight/>
      <Testimonials/>
      <About/>
    </main>
  )
}

export default Home