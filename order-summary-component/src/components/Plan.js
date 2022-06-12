import React from 'react';
import Music from '../images/icon-music.svg';

function Plan() {
    return (
        <div className="plan-selection">
            <img src={Music} alt="music note"/>
            <div className="plan">
                <p className="current-plan">Annual Plan</p>
                <p className="plan-price">$59.99/year</p>
            </div>
            <button className="change-plan">Change</button>
        </div>
    )
}

export default Plan;