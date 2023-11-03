//import ListGroup from "./components/ListGroup";
//import Properties from "./components/Props.tsx";
import Button from "./components/Button";

const Alert = 1;
const handleClick = () => {
  Alert === 1 ? alert("true") : console.log(false);
};
function App() {
  //const Cities = ["Lagos", "Texas", "Fineland", "Mexico", "Bahamas", "Madrid"];
  return (
    <>
      <Button
        children="Click me please"
        onClick={handleClick}
        color="success"
      />
    </>
  );
}
export default App;
