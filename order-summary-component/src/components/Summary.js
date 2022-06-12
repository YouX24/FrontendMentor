import React from 'react';
import Plan from '../components/Plan'
import Dance from '../images/illustration-hero.svg';

function Summary() {
    return (
        <div className="order-summary">
            <img src={Dance} alt="illustration" className="hero"/>
            <div className="summary">
                <h3>Order Summary</h3>
                <p className="order-message">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <Plan/>
                <button className="payment-btn">Proceed to Payment</button>
                <button className="cancel-payment">Cancel Order</button>
            </div>
        </div>
    )
}

export default Summary;