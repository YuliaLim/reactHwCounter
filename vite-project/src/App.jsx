import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter"
import CounterReduce from "./components/CounterReduce"
function App() {

  return (
    <div>
      {/* <Counter></Counter> */}
      <CounterReduce></CounterReduce>
    </div>
  );
}

export default App;
