import React, { createContext, useState } from "react";
import {
	addPokemonToMyPokemons,
	editPokemonFromMyPokemons,
	releasePokemonFromMyPokemons,
} from "./pokemon.utils";

export const PokemonContext = createContext({
	myPokemons: [],
	addPokemon: () => {},
	releasePokemon: () => {},
	editPokemon: () => {},
	getCountPokemonByName: () => {},
});

const PokemonProvider = ({ children, testingProps = {} }) => {
	const myPokemonsLS = localStorage.getItem("myPokemons");

	const [myPokemons, setMyPokemons] = useState(
		(!!myPokemonsLS && JSON.parse(myPokemonsLS)) || []
	);

	const addPokemon = (pokemon) =>
		setMyPokemons(addPokemonToMyPokemons(myPokemons, pokemon));
	const releasePokemon = (pokemonNicknameToRelease) =>
		setMyPokemons(
			releasePokemonFromMyPokemons(myPokemons, pokemonNicknameToRelease)
		);
	const editPokemon = (pokemon) =>
		setMyPokemons(editPokemonFromMyPokemons(myPokemons, pokemon));

	return (
		<PokemonContext.Provider
			value={{
				myPokemons,
				addPokemon,
				editPokemon,
				releasePokemon,
				...testingProps,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};

export default PokemonProvider;
