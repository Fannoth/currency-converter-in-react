import React from "react";

function Button({ converterFn  }) {
  return (
    <button id="buttonC" className="Converter" onClick={converterFn}>
      Przelicz
    </button>
  );
}

export default Button;
