import Button from "./components/Button";

const Alert = true;
const handleClick = () => {
  Alert === true ? alert("true") : console.log(false);
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
