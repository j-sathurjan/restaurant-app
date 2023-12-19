import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

function MenuCard({title, price, description, url, imageSrc}) {
  return (
    <div>
        <img src={imageSrc} alt={title} height={180} width={266}/>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
        <a href={url}>Order a delivery <DeliveryDiningIcon/></a>
    </div>
  )
}

export default MenuCard