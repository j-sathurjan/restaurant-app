import React from 'react'
import MenuCard from './MenuCard'
import './Highlight.css'

function Highlight() {
    const specials = [
    {
        title: 'Greek salad',
        price: '$12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        url: '',
        getImageSrc: () => require("../assets/greek salad.jpg")
    },
    {
        title: 'Bruchetta',
        price: '$5.99',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
        url: '',
        getImageSrc: () => require("../assets/bruchetta.JPG")
    },
    {
        title: 'Lemon Dessert',
        price: '$5.00',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        url: '',
        getImageSrc: () => require("../assets/lemon dessert.jpg")
    }]
  return (
    <div className='highlight-section'>
        <div className='highlight-header'>
            <h1>This weeks specials!</h1>
            <span><a href='/online-menu'>Online Menu</a></span>
        </div>
        <div className='card'>
            {specials.map((special)=>(
                <MenuCard
                key={special.title}
                title={special.title}
                price={special.price}
                description={special.description}
                url={special.url}
                imageSrc={special.getImageSrc()}
                />
            ))}
        </div>
    </div>
  )
}

export default Highlight