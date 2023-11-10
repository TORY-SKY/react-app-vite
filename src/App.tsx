import APIFe from "./components/APIFe";

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
      <h1>h1 delicious</h1>
      <APIFe />
      <button
        onClick={() => {
          alert("hello world");
        }}
      >
        Alert
      </button>
    </>
  );
}
export default App;
