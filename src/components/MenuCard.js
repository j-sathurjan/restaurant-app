import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import './MenuCard.css'

function MenuCard({title, price, description, url, imageSrc}) {
  return (
    <div className='menu-card'>
        <img src={imageSrc} alt={title}/>
        <div className='menu-card-header'>
            <h3>{title}</h3>
            <h5>{price}</h5>
        </div>
        <p>{description}</p>
        <a href={url}>Order a delivery <span><DeliveryDiningIcon/></span></a>
    </div>
  )
}

export default MenuCard