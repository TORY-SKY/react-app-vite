import FetchComponent from "./components/FetchComponent";
import UseEffect from "./components/UseEffect";

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
      {!(<FetchComponent />) ? (
        <>
          <UseEffect name={Todo} />
        </>
      ) : (
        <>
          <UseEffect name={Todo} />
          <p>Waiting for data...</p>
        </>
      )}
      <FetchComponent />
    </>
  );
}
export default App;
