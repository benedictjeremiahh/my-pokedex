export const getMyPokemonCount = (myPokemons, pokemonName) => {
	return myPokemons.filter((myPokemon) => myPokemon.name === pokemonName)
		.length;
};
