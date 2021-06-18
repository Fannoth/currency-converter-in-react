import React from "react";

function Select({ getCurrency }) {
  return (
    <select
      id="selectC"
      className="CurrencySelect"
      onChange={(e) => getCurrency(e.target.value)}
    >
      <option value="NULL">Wybierz walute</option>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
    </select>
  );
}

export default Select;
