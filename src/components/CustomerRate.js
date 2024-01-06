import React from 'react';
import './Testimonials.css';

function CustomerRate({rating, name, reviewText, imageSrc}) {
  return (
    <div className='review-container'>
        <h5>{rating}</h5>
        <div className='rate-user'>
          <img src={imageSrc} alt={name} height={50} width={50}/>
          <h5>{name}</h5>
        </div>
        <p>{reviewText}</p>
    </div>
  )
}

export default CustomerRate