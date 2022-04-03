import AOS from "aos";
import "./App.css";
import Main from "./pages/Main";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ offset: 10 });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
