import React from "react";
import logo from "./logo.png";

const UpperSection = () => {
  return (
    <>
      <div className="upperSection">
        <div className="logo">
          <img src={logo} alt="logo" className="logoPng"></img>
        </div>
        <div className="TextBox">
          <p className="CurrencyText">Currency Converter</p>
        </div>
      </div>
    </>
  );
};

export default UpperSection;
