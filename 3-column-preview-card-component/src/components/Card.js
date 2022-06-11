import React from 'react'

function Card(props) {
    return (
        <div className={props.className + " car-card"}>
            <img src={props.icon} alt="car type"/>
            <h3 className='car-type'>{(props.type).toUpperCase()}</h3>
            <p className='car-description'>{props.description}</p>
            <button>Learn More</button>
        </div>
    )
}

export default Card;