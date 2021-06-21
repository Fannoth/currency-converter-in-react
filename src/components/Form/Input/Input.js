import React from "react";

function Input({ getAmount }) {
  return (
    <input
      onInput={(e) => getAmount(e.target.value)}
      type="number"
      placeholder="Wpisz kwote"
    ></input>
  );
}

export default Input;
