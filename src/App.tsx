import { useState } from "react";
import ExpensiveComp from "./components/MemoMan";
import ReducerMan from "./components/ReducerMan";
import StateMan from "./components/StateMan";
function App() {
  const Vicky = "Became";
  const Todo = [
    { id: 0, text: `${Vicky} A Full Stack Web Developer` },
    { id: 1, text: `${Vicky} A Guitarist` },
    { id: 2, text: `${Vicky} Song Writer` },
    { id: 3, text: `${Vicky} An Automotive Engineer` },
  ];

  const [theState, setThestate] = useState(3);

  return (
    <>
      <StateMan />
      <ReducerMan />
      <ExpensiveComp value={theState} />
      <button onClick={() => setThestate(theState + 1)}>
        Change the props
      </button>
      <button onClick={() => setThestate(theState - 1)}>
        Change the props
      </button>
    </>
  );
}
export default App;
