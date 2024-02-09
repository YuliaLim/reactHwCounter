import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDeincrement = () => {
    setCounter(counter - 1);
  };
  const handleResetCounter = () => {
    setCounter(0);
  };
  return (
    <div>
      <div className="showCounter">{counter}</div>
      <Button text="Increment" handleClick={handleIncrement}></Button>
      <Button text="Deincrement" handleClick={handleDeincrement}></Button>
      <Button text="Reset" handleClick={handleResetCounter}></Button>
    </div>
  );
};

export default Counter;
