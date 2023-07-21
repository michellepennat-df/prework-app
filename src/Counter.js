import React, { useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    if (count >= 100) {
      alert("Count is too high!");
    }
  };
  const decrement = () => {
    setCount(count - 1);
    if (count < 1) {
      alert("Count is too low!");
    }
  };

  return (
    <div className="counter">
      <h1>Simple React App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
