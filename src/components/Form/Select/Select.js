import React from "react";

function Select({ getCurrency }) {
  return (
    <select
      id="selectC"
      className="CurrencySelect"
      onChange={(e) => getCurrency(e.target.value)}
    >
      <option disabled>Wybierz walute</option>
      <optgroup label="Rates">
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
      </optgroup>

    </select>
  );
}

export default Select;
