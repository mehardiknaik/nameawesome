import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Awesometext from "../components/Awesometext/Awesometext";
import Textinput from "../components/Textinput/Textinput";
import { font } from "../config/font";

function Main() {
  const [name, setName] = useState("Hardik Naik");
  const [fonts, setFonts] = useState([]);

  const fontFunction = () => {
    setFonts(font(name));
    console.log("Font function called", font(name));
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
