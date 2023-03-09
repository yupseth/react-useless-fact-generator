import { useState, useEffect } from "react";
import Card from "./components/Card";
import FactButton from "./components/FactButton";
import Footer from "./components/Footer";

function App() {
  const [displayFact, setDisplayFact] = useState(false);
  const [displaySource, setDisplaySource] = useState(false);

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
      .then((response) => response.json())
      .then((data) => {
        !displayFact && setDisplayFact(data.text);
        !displaySource && setDisplaySource(data.source);
      });
  });

  const fetchFact = () => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
      .then((response) => response.json())
      .then((data) => {
        setDisplayFact(data.text);
      });
  };

  return (
    <div className="app">
      <Card fact={displayFact} />
      <FactButton onGenerate={fetchFact}></FactButton>
      <Footer source={displaySource}></Footer>
    </div>
  );
}

export default App;
