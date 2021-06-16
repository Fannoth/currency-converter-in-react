import React from 'react'
import '../reset.css'
import '../style.css'

const LowerSection = () => {
    return (
        <>
        <div className="lowerSection">
                <input id="inputC" type="number" placeholder="Wpisz kwote"></input>
                <select id="selectC" className="CurrencySelect">
                    <option value="0">Wybierz walute</option>
                </select>
                <button id="buttonC" className="Converter">Przelicz</button>
            </div>
            <span id="spanC"></span>
        </>
    )
}
export default LowerSection;