import { useState } from "react";
import Attribute from "./components/Attribute";
import data from "./data.json";

function App() {
  console.log(data);
  return (
    <section className="result-summary">
      <div className="result-summary__container">
        <div className="result-summary__result">
          <h2>Your Result</h2>
          <div>
            <h1>
              76
              <span>of 100</span>
            </h1>
          </div>
          <span>Great</span>
          <p>
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        <div className="result-summary__summary">
          <h2>Summary</h2>
          <div>
            {data.map((attribute) => (
              <Attribute
                key={attribute.category}
                attribute={attribute.category}
                score={attribute.score}
                icon={attribute.icon}
              />
            ))}
          </div>
          <button type="button">Continue</button>
        </div>
      </div>
    </section>
  );
}

export default App;
