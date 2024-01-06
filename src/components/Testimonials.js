import React from 'react';
import './Testimonials.css';
import CustomerRate from './CustomerRate';

function Testimonials() {
  const ratings =[
    {
      rating: 'Good',
      name: 'Sathu',
      reviewText: 'Good product. fast delivery',
      getImgSrc: () => require("../assets/user avatar.jpg")
    },
    {
      rating: 'excellence',
      name: 'Vithu',
      reviewText: 'high quality. innovative.',
      getImgSrc: () => require("../assets/user avatar.jpg")
    },
    {
      rating: 'Awesome',
      name: 'Thanu',
      reviewText: 'Good Product. respected peoples.',
      getImgSrc: () => require("../assets/user avatar.jpg")
    },
    {
      rating: 'Nice',
      name: 'Loges',
      reviewText: 'Nice employees to talk.',
      getImgSrc: () => require("../assets/user avatar.jpg")
    },{
      rating: 'not bad',
      name: 'Gobi',
      reviewText: 'good.',
      getImgSrc: () => require("../assets/user avatar.jpg")
    }
  ]
  return (
    <div className='testimonial-section'>
      <div className='testimonial-header'>
            <h1>Testimonials</h1>
      </div>
      <div className='testimonial-content'>
        {ratings.map((rating)=>(
          <CustomerRate
            key={rating.name}
            rating={rating.rating}
            name={rating.name}
            reviewText={rating.reviewText}
            imageSrc={rating.getImgSrc()}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials