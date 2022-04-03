import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Awesometext from "../components/Awesometext/Awesometext";
import Textinput from "../components/Textinput/Textinput";
import { forward } from "../config/font1";

function Main() {
  const [name, setName] = useState("Hardik Naik");
  const [fonts, setFonts] = useState([]);

  const fontFunction = () => {
    setFonts(forward(name));
    console.log("Font function called", );
  };
  useEffect(() => {
    fontFunction();
  }, [name]);
  return (
    <Container>
      <Textinput name={name} setName={setName} />
      <Awesometext fonts={fonts} />
    </Container>
  );
}

export default Main;
