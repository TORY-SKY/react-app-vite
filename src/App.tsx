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

  return (
    <>
      <StateMan />
      <ReducerMan />
    </>
  );
}
export default App;
