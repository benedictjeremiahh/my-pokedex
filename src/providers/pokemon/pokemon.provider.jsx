import React, { createContext, useState } from "react";
import {
	addPokemonToMyPokemons,
	editPokemonFromMyPokemons,
	releasePokemonFromMyPokemons,
} from "./pokemon.utils";

export const PokemonContext = createContext({
	myPokemons: [],
	addPokemon: () => {},
	removePokemon: () => {},
	editPokemon: () => {},
	getCountPokemonByName: () => {},
});

const PokemonProvider = ({ children }) => {
	const myPokemonsLS = localStorage.getItem("myPokemons");
	const [myPokemons, setMyPokemons] = useState(
		(!!myPokemonsLS && JSON.parse(myPokemonsLS)) || []
	);

	const addPokemon = (pokemon) =>
		setMyPokemons(addPokemonToMyPokemons(myPokemons, pokemon));
	const releasePokemon = (pokemon) =>
		setMyPokemons(releasePokemonFromMyPokemons(myPokemons, pokemon));
	const editPokemon = (pokemon) =>
		setMyPokemons(editPokemonFromMyPokemons(myPokemons, pokemon));

	return (
		<PokemonContext.Provider
			value={{
				myPokemons,
				addPokemon,
				editPokemon,
				releasePokemon,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};

export default PokemonProvider;
