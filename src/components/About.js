import React from 'react'
import marioAndrianA from '../assets/Mario and Adrian A.jpg'
import marioAndrianB from '../assets/Mario and Adrian b.jpg'
function About() {
  return (
    <div>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <img src={marioAndrianA} alt='Mario and Andrian' />
      <img src={marioAndrianB} alt='Mario and Andrian' />
    </div>
  )
}

export default About