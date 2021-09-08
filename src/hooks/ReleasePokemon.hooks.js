import { useContext, useState } from "react";
import { PokemonContext } from "../providers/pokemon/pokemon.provider";

const useReleasePokemon = () => {
	const { releasePokemon } = useContext(PokemonContext);
	const [nickname, setNickname] = useState("");
	const [showReleaseConfirmation, setShowReleaseConfirmation] =
		useState(false);

	const onReleaseClick = (nicknameInput) => {
		setNickname(nicknameInput);
		setShowReleaseConfirmation(true);
	};

	const onConfirm = (isReleased) => {
		if (isReleased && !!nickname) releasePokemon(nickname);

		setShowReleaseConfirmation(false);
		setNickname("");
	};

	return [showReleaseConfirmation, onReleaseClick, onConfirm, nickname];
};

export default useReleasePokemon;
