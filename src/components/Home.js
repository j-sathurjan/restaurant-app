import React from 'react'
import HeroSection from './HeroSection'
import Highlight from './Highlight'
import Testimonials from './Testimonials'
import About from './About'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <HeroSection/>
      <Highlight/>
      <Testimonials/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home