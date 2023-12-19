import React from 'react'

function CustomerRate({rating, name, reviewText, imageSrc}) {
  return (
    <div className='review-container'>
        <h5>{rating}</h5>
        <img src={imageSrc} alt={name} height={50} width={50}/>
        <h5>{name}</h5>
        <p>{reviewText}</p>
    </div>
  )
}

export default CustomerRate