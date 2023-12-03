import React, { useState, useEffect } from "react";
import axios from "axios";
import babrbershop from "./images/barbershop.png";
const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.data.results)
      .then((pokemonList) => setPokemon(pokemonList))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {pokemon.map((pokemon) => (
        <div key={pokemon.name}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} alt={pokemon.name} />
          <img src={babrbershop} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
