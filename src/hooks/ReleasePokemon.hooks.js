import { useContext, useState } from "react";
import { PokemonContext } from "../providers/pokemon/pokemon.provider";

const useReleasePokemon = ({ nickname }) => {
	const { releasePokemon } = useContext(PokemonContext);
	const [showReleaseConfirmation, setShowReleaseConfirmation] =
		useState(false);

	const onReleaseClick = () => {
		setShowReleaseConfirmation(true);
	};

	const onConfirm = (isReleased) => {
		if (isReleased) releasePokemon(nickname);

		setShowReleaseConfirmation(false);
	};

	return [showReleaseConfirmation, onReleaseClick, onConfirm];
};

export default useReleasePokemon;
