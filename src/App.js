import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Awesometext from "./components/Awesometext/Awesometext";
import Textinput from "./components/Textinput/Textinput";
import { font } from "./config/font";

function App() {
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
    <div className="App">
      <Container>
        <Textinput name={name} setName={setName} />
        <Awesometext fonts={fonts} />
      </Container>
    </div>
  );
}

export default App;
