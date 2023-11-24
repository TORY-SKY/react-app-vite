import { useState } from "react";
import ExpensiveComp from "./components/MemoMan";

import StateMan from "./components/StateMan";
import TheUseMemoComp from "./components/TheUseMemoComp";
import SideEffect from "./components/SideEffect";
import TheUseRefHook from "./components/TheUseRefHook";

function App() {
  const Vicky = "Became";
  const Todo = [
    { id: 0, text: `${Vicky} A Full Stack Web Developer` },
    { id: 1, text: `${Vicky} A Guitarist` },
    { id: 2, text: `${Vicky} Song Writer` },
    { id: 3, text: `${Vicky} An Automotive Engineer` },
  ];

  return (
    <>
      <SideEffect />
      <TheUseRefHook />
    </>
  );
}
export default App;
