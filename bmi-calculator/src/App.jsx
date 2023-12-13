import { useState } from "react";
import Header from "./components/Header";
import Limitations from "./components/Limitations";
import ResultsMeans from "./components/ResultsMeans";
import Tips from "./components/Tips";

function App() {
  return (
    <main>
      <Header />
      <ResultsMeans />
      <Tips />
      <Limitations />
    </main>
  );
}

export default App;
