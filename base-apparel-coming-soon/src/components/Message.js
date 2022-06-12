import React from 'react';
import Arrow from '../images/icon-arrow.svg';
import Error from '../images/icon-error.svg';

function Message() {

    const[email, setEmail] = React.useState("");

    function toggleEmail(event) {
        setEmail(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const errorMessage = document.querySelector("small")
        const errorIcon = document.querySelector(".error-icon")
        const emailInput = document.querySelector('input[type="email"]')

        const valid = validateEmail(email);
        
        if (!valid) {
            errorMessage.style.display = "block"
            errorIcon.style.display = "block"
            emailInput.style.border = "2px solid hsl(0, 93%, 68%)"
        } else {
            errorMessage.style.display = "none"
            errorIcon.style.display = "none"
            emailInput.style.border = "1px solid hsl(0, 36%, 70%)"
        }
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div className="message-container">
            <h2><span>WE'RE</span> COMING SOON</h2>
            <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            <form>
                <input type="email" placeholder='Email Address' onChange={toggleEmail} value={email} className="error-input"/>
                <img src={Error} alt="error" className="error-icon"/>
                <button onClick={handleSubmit}><img src={Arrow} alt="arrow"/></button>
            </form>
            <small className="error-message">Please provide a valid email</small>
        </div>
    )
}

export default Message;