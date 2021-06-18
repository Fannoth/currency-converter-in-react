import React from "react";
import "./style.css";
import "./reset.css";
import UpperSection from "./components/UpperSection";
import LowerSection from "./components/LowerSection";
import CopyRight from "./components/CopyRight";

function App() {
  return (
    <>
      <UpperSection></UpperSection>
      <LowerSection></LowerSection>
      <CopyRight></CopyRight>
    </>
  );
}

export default App;
