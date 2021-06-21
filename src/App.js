import React from "react";
import "./style.css";
import "./reset.css";
import LogoAndDescription from "./components/LogoAndDescription/LogoAndDescription";
import Form from "./components/Form/Form";
import CopyRight from "./components/CopyRight/CopyRight";

function App() {
  return (
    <>
      <LogoAndDescription></LogoAndDescription>
      <Form></Form>
      <CopyRight></CopyRight>
    </>
  );
}

export default App;
