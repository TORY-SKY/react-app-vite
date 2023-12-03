import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import PokemonList from "./components/BardPokemon.tsx";
function App() {
  const [userName, setUserName] = useState([]);

  return (
    <>
      <h1>hello world</h1>
      <PokemonList />
    </>
  );
}
export default App;
