import React from "react";

function Button({ onBtnClick }) {
  return (
    <button id="buttonC" className="Converter" onClick={onBtnClick}>
      Przelicz
    </button>
  );
}

export default Button;
