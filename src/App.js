import { useState } from "react";
import Card from "./components/Card";
import FactButton from "./components/FactButton";
import Footer from "./components/Footer";

function App() {
  const [displayFact, setDisplayFact] = useState("");

  const fetchFact = () => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  fetchFact();

  return (
    <div className="app">
      <Card />
      <FactButton></FactButton>
      <Footer></Footer>
    </div>
  );
}

export default App;
