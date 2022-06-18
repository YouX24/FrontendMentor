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
    }

    function tipSelect(event) {
        toggleChange(event);
        //TODO Change Button Color
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

    return (
        <div>
            <img className="logo" src={Logo} alt="splitter"/>
            <section>
                <div>
                    <p>Bill</p>
                    <img src={Dollar} alt="dollar"/>
                    <input onChange={toggleChange} value={bill.billTotal} type="text" name="billTotal" placeholder='0.00'/>
                </div>
                <p>Select Tip %</p>
                <div>
                    <button onClick={tipSelect} value="5" name="tipPercent">5%</button>
                    <button onClick={tipSelect} value="10" name="tipPercent">10%</button>
                    <button onClick={tipSelect} value="15" name="tipPercent">15%</button>
                    <button onClick={tipSelect} value="25" name="tipPercent">25%</button>
                    <button onClick={tipSelect} value="50" name="tipPercent">50%</button>
                    <input onChange={toggleChange} type="text" name="tipPercent" placeholder='CUSTOM'/>
                </div>
                <div>
                    <p>Number of People</p>
                    <img src={Person} alt="people"/>
                    <input onChange={toggleChange} value={bill.numPeople} type="text" name="numPeople" placeholder='0'/>
                </div>
            </section>
            <section>
                <div>
                    <p>Tip Amount</p>
                    <p>/ person</p>
                </div>
                <p>${tipPerPerson()}</p>
                <div>
                    <p>Total</p>
                    <p>/ person</p>
                </div>
                <p>${totalPerPerson()}</p>
                <button>RESET</button>
            </section>
        </div>
    )
}

export default Tip;