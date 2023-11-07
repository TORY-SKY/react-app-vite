import Button from "./components/Button";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  const Fruits = ["apple", "watermelon", "orange"];
  console.log(Fruits.includes("orange"[1]));
  alert(Fruits.includes("orange"[1]));
  //const Cities = ["Lagos", "Texas", "Fineland", "Mexico", "Bahamas", "Madrid"];
  return (
    <>
      <Calculator />
      <Button children="Click me please" />

      <div className="display1">Display 1</div>
      <div className="display1">Display 2</div>
    </>
  );
}
export default App;
