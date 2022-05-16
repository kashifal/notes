import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(Boolean);

  const getMode = (mode) => {
    setState(mode);
  };
  console.log(state);
  return (
    <div>
      <Header getMode={getMode} />
      <Hero mode={state} />
    </div>
  );
};

export default App;
