import React from 'react';
import Currency from '../images/icon-ethereum.svg';
import Clock from '../images/icon-clock.svg';
import View from '../images/icon-view.svg';

function Card(props) {
    return (
        <div class="card">
            <div className="image-container">
                <img className="nft-image" src={props.nftImage} alt="nft"/>
                <div className="overlay">
                    <img src={View} alt="view"/>
                </div>
            </div>
            <h3 className="nft-name">{props.nftName}</h3>
            <p className="description">{props.description}</p>
            <div className="price-time">
                <img src={Currency} alt="price"/>
                <p className="nft-price">{props.nftPrice}</p>
                <img className="clock" src={Clock} alt="clock"/>
                <p className="nft-time">{props.timeRemaining} days left</p>
            </div>
            <hr></hr>
            <div className="creator-info">
                <img className="avatar" src={props.avatar} alt="creator"/>
                <p>Creation of <span>{props.creator}</span></p>
            </div>
        </div>
    )
}

export default Card;