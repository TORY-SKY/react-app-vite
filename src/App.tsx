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
  console.log(Todo);

  return (
    <>
      {!(<FetchComponent />) ? (
        <>
          <UseEffect name={Vicky} />
        </>
      ) : (
        <>
          <UseEffect name={Todo} />
          <p>Waiting for data...</p>
        </>
      )}
    </>
  );
}
export default App;
