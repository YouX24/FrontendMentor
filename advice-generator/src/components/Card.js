import React from 'react'; 
import Dice from '../images/icon-dice.svg';

function Card() {

    const [quote, setQuote] = React.useState({
        id: 0,
        advice: ""
    });

    const [click, setClick] = React.useState(0);

    React.useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => setQuote(data.slip))
    }, [click])

    function handleClick() {
        setClick((prevClick) => prevClick + 1);
    }

    return (
        <section>
            <h3 className="advice-num">ADVICE #{quote.id}</h3>
            <p className="advice">"{quote.advice}"</p>
            <div className="divider"></div>
            <button className="dice-btn" onClick={handleClick}><img className="dice-img" src={Dice} alt="dice"/></button>
        </section>
    )
}

export default Card;