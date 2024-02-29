import { useReducer } from "react";

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        if (state > 0) {
          return state - 1;
        }
        return state;
      case "reset":
        return 0;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  const handleIncrement = () => {
    dispatch({
      type: "increment",
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "decrement",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "reset",
    });
  };
  return (
    <>
      <h1>Counter: {state}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
export default Counter;
