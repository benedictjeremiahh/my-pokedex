export const addPokemonToMyPokemons = (myPokemons, pokemonToAdd) => {
	const newMyPokemons = [...myPokemons, pokemonToAdd];
	localStorage.setItem("myPokemons", JSON.stringify(newMyPokemons));

	return newMyPokemons;
};

export const releasePokemonFromMyPokemons = (myPokemons, pokemonToRelease) => {
	const newMyPokemons = myPokemons.filter(
		(pokemon) => pokemon.nickname !== pokemonToRelease.nickname
	);
	localStorage.setItem("myPokemons", JSON.stringify(newMyPokemons));

	return newMyPokemons;
};

export const editPokemonFromMyPokemons = (myPokemons, pokemonToEdit) => {
	const indexToBeUpdated = myPokemons.findIndex(
		(pokemon) => pokemon.nickname === pokemonToEdit.nickname
	);
	myPokemons[indexToBeUpdated] = {
		...myPokemons[indexToBeUpdated],
		nickname: pokemonToEdit.newNickname,
	};
	localStorage.setItem("myPokemons", JSON.stringify(myPokemons));

	return myPokemons;
};
