import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>
      <div>{/* los demás exponentes también reciben count */}</div>
      <Counter count={count} increment={increment} decrement={decrement} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />

        {/*ITERACIÓN 5:
        <ExponentTwo num={count} exponent={2}/>
        <ExponentTwo num={count} exponent={3}/>
        <ExponentTwo num={count} exponent={4}/>
        <ExponentTwo num={count} exponent={5}/>
        <ExponentTwo num={count} exponent={6}/>
      */}
      </div>
    </div>
  );
}

export default App;
