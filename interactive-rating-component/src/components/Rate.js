import React from 'react';
import Star from '../images/icon-star.svg'
import Thank from '../images/illustration-thank-you.svg'

function Rate() {

    const [userRating, setUserRating] = React.useState(0);

    function submitRating() {
        if (userRating !== 0) {
            const rateCard = document.querySelector(".rate-card")
            const thankCard = document.querySelector(".thank-card")
            rateCard.style.display = "none";
            thankCard.style.display = "flex";
        }
    }

    function selectRating(event) {
        const ratings = document.getElementsByClassName("rate-num")
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.remove("selected-num")
            ratings[i].classList.add("rate-num")
        }
        event.target.classList.add("selected-num")
        setUserRating(event.target.innerHTML);
    }

    return (
        <div>
            <div className="rate-card">
                <span>
                    <img className="star" src={Star} alt="star"/>
                </span>
                <h3 className="question">How did we do?</h3>
                <p className="message">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="rating">
                    <span className="rate-num" onClick={selectRating}>1</span>
                    <span className="rate-num" onClick={selectRating}>2</span>
                    <span className="rate-num" onClick={selectRating}>3</span>
                    <span className="rate-num" onClick={selectRating}>4</span>
                    <span className="rate-num" onClick={selectRating}>5</span>
                </div>
                <button className="submit" onClick={submitRating}>SUBMIT</button>
            </div>
            <div className="thank-card">
                <img src={Thank} alt="thank you"/>
                <p className="selection-message">You selected {userRating} out of 5</p>
                <h3 className="thank-you">Thank you!</h3>
                <p className="appreciate-message">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
        </div>
    )
}

export default Rate;