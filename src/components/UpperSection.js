import React from 'react'
import '../reset.css'
import '../style.css'
import logo from '../zdj1.png'

const UpperSection = () => {
    return (
    <>
    <div class="upperSection">
                <div class="logo">
                    <img src={logo} alt="logo" class="logoPng"></img>
                </div>
                <div class="TextBox">
                    <p class="CurrencyText">Currency Converter</p>
                </div>
    </div>
    </>
    )
}

export default UpperSection;