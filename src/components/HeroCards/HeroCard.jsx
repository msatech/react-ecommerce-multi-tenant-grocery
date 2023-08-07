import React from 'react'
import './HeroCard.css'


function HeroCard({ image }) {
    return (
        <div className='herocard'>
            <img src={image} alt="herocard" />
        </div>
    )
}

export default HeroCard
