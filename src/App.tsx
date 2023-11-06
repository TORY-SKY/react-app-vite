import Button from "./components/Button";

function App() {
  //const Cities = ["Lagos", "Texas", "Fineland", "Mexico", "Bahamas", "Madrid"];
  return (
    <>
      <Button children="Click me please" />

      <div>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl ">Hello, world!</h1>
          <p className="text-danger-500">
            This is a React application with Tailwind CSS.
          </p>
        </div>
      </div>
    </>
  );
}
export default App;
