import React from 'react'
import CustomerRate from './CustomerRate'

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
  ]
  return (
    <div>
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
  )
}

export default Testimonials