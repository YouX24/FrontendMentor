import React from 'react';
import Logo from '../images/logo.svg';
import Dollar from '../images/icon-dollar.svg';
import Person from '../images/icon-person.svg';

function Tip() {

    const [bill, setBill] = React.useState({
        billTotal: "",
        tipPercent: "",
        numPeople: "",
        tipAmount: "",
    })

    function toggleChange(event) {
        const {value, name} = event.target;
        setBill((prevBill) => ({
            ...prevBill,
            [name]: value
        }))
        if (name === "numPeople" && parseInt(value) === 0) {
            event.target.classList.add("num-people-error")
            document.querySelector(".error-message").style.display = "block";
        }
        else if (name === "numPeople" && parseInt(value) > 0) {
            document.querySelector(".error-message").style.display = "none";
            event.target.classList.remove("num-people-error")
        }
    }

    function tipSelect(event) {
        toggleChange(event);
        const allTipBtn = document.getElementsByClassName('tip-btn')
        for (let i = 0; i < allTipBtn.length; i++) {
            allTipBtn[i].classList.add('unselected-btn')
            allTipBtn[i].classList.remove('selected-btn')
        }
        event.target.classList.add('selected-btn');
        event.target.classList.remove('unselected-btn');
    }

    function customTip(event) {
        const allTipBtn = document.getElementsByClassName('tip-btn')
        for (let i = 0; i < allTipBtn.length; i++) {
            allTipBtn[i].classList.add('unselected-btn')
            allTipBtn[i].classList.remove('selected-btn')
        }
        const {value, name} = event.target;
        setBill((prevBill) => ({
            ...prevBill,
            [name]: value
        }))
    }

    function tipPerPerson() {
        if (bill.billTotal === '0' || bill.tipPercent === '0' || bill.numPeople === '0' || bill.billTotal === '' || bill.tipPercent === '' || bill.numPeople === '') {
            return (0.0).toFixed(2);
        }
        const tip = parseFloat(bill.billTotal) * (parseFloat(bill.tipPercent) / 100) / parseInt(bill.numPeople);
        return tip.toFixed(2);
    }

    function totalPerPerson() {
        if (bill.billTotal === '0' || bill.numPeople === '0' || bill.billTotal === '' || bill.numPeople === '') {
            return (0.0).toFixed(2);
        }
        const total = parseFloat(bill.billTotal) / parseInt(bill.numPeople) + parseFloat(tipPerPerson())
        return total.toFixed(2);
    }

    function reset() {
        setBill(({
            billTotal: "",
            tipPercent: "",
            numPeople: "",
            tipAmount: "",
        }))

        const allTipBtn = document.getElementsByClassName('tip-btn')
        for (let i = 0; i < allTipBtn.length; i++) {
            allTipBtn[i].classList.add('unselected-btn')
            allTipBtn[i].classList.remove('selected-btn')
        }

        document.querySelector('.custom-tip').value = "";
    }

    return (
        <div>
            <header>
                <img className="logo" src={Logo} alt="splitter"/>
            </header>
            <div className="calculator">
                <section>
                    <p className="heading">Bill</p>
                    <div className="input-div">
                        <img className="floating-icon" src={Dollar} alt="dollar"/>
                        <input className="user-input bill-input" onChange={toggleChange} value={bill.billTotal} type="text" name="billTotal" placeholder='0.00'/>
                    </div>
                    <p className="heading-margin">Select Tip %</p>
                    <div className="tip-selection">
                        <button className="tip-btn unselected-btn" onClick={tipSelect} value="5" name="tipPercent">5%</button>
                        <button className="tip-btn unselected-btn" onClick={tipSelect} value="10" name="tipPercent">10%</button>
                        <button className="tip-btn unselected-btn" onClick={tipSelect} value="15" name="tipPercent">15%</button>
                        <button className="tip-btn unselected-btn" onClick={tipSelect} value="25" name="tipPercent">25%</button>
                        <button className="tip-btn unselected-btn" onClick={tipSelect} value="50" name="tipPercent">50%</button>
                        <input className='custom-tip' onChange={customTip} type="text" name="tipPercent" placeholder='Custom'/>
                    </div>
                    <div className="num-people-p">
                        <p className="heading-margin num-of-people">Number of People</p>
                        <p className="error-message">Can't be zero</p>
                    </div>
                    <div className="input-div">
                        <img className="floating-icon" src={Person} alt="people"/>
                        <input className="user-input" onChange={toggleChange} value={bill.numPeople} type="text" name="numPeople" placeholder='0'/>
                    </div>
                </section>
                <section className="result">
                    <div className="per-person">
                        <p className="total">Tip Amount</p>
                        <p className="per">/ person</p>
                    </div>
                    <p className="calculated">${tipPerPerson()}</p>
                    <div className="per-person">
                        <p className="total">Total</p>
                        <p className="per">/ person</p>
                    </div>
                    <p className="calculated">${totalPerPerson()}</p>
                    <button className="reset" onClick={reset}>RESET</button>
                </section>
            </div>
        </div>
    )
}

export default Tip;