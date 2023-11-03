import ListGroup from "./components/ListGroup";
import Properties from "./components/Props.tsx";

function App() {
  const Cities = ["Lagos", "Texas", "Fineland", "Mexico", "Bahamas", "Madrid"];
  return (
    <>
      <ListGroup />
      <Properties cities={Cities} heading={"Cities"} />
    </>
  );
}
export default App;
