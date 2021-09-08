import { useCallback, useContext, useState } from "react";
import { PokemonContext } from "../providers/pokemon/pokemon.provider";

const useCatchPokemon = () => {
	const [isCatchLoading, setIsCatchLoading] = useState(false);
	const [isCatchSuccess, setIsCatchSuccess] = useState(null);
	const [pokemon, setPokemon] = useState(null);
	const [newPokemon, setNewPokemon] = useState(null);
	const { addPokemon, myPokemons } = useContext(PokemonContext);

	const catchPokemon = useCallback(() => {
		setIsCatchLoading(true);

		const isSuccess = Math.round(Math.random()) === 1;

		setTimeout(() => {
			if (isSuccess) {
				const newID =
					myPokemons.length > 0
						? myPokemons[myPokemons.length - 1].id + 1
						: 1;
				const samePokemonCount = myPokemons.filter(
					(myPokemon) => pokemon.name === myPokemon.name
				).length;
				const isNewPokemon = samePokemonCount === 0;

				const newPokemon = {
					id: newID,
					nickname: isNewPokemon
						? pokemon.name
						: `${pokemon.name}${samePokemonCount}`,
					name: pokemon.name,
					image: pokemon.sprites.front_default,
				};

				addPokemon(newPokemon);
				setNewPokemon(newPokemon);
			}
			setIsCatchSuccess(isSuccess);
			setIsCatchLoading(false);
		}, 5000);
	}, [pokemon, myPokemons, addPokemon]);

	return [
		isCatchLoading,
		isCatchSuccess,
		newPokemon,
		catchPokemon,
		setPokemon,
		setIsCatchSuccess,
	];
};

export default useCatchPokemon;
