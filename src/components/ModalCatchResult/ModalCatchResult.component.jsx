import {
	Backdrop,
	Button,
	Fade,
	Grid,
	Modal,
	TextField,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./ModalCatchResult.styles";
import Pokeball from "../../assets/img/pokeball.png";
import { PokemonContext } from "../../providers/pokemon/pokemon.provider";

const ModalCatchResult = (props) => {
	const { open, isCatchSuccess, onClose, pokemon } = props;
	const classes = useStyles();
	const { editPokemon, myPokemons } = useContext(PokemonContext);
	const [nickname, setNickname] = useState("");
	const [errorText, setErrorText] = useState(null);

	const updateNickname = (e) => {
		e.preventDefault();

		const checkNicknameExist = myPokemons.find(
			(myPokemon) =>
				myPokemon.id !== pokemon.id && myPokemon.nickname === nickname
		);

		if (!!checkNicknameExist) {
			setErrorText(
				"This nickname is already been taken, please choose another nickname"
			);
		} else {
			const hasNicknameChanges = nickname !== pokemon.nickname;
			if (hasNicknameChanges) {
				editPokemon({
					id: pokemon.id,
					nickname: pokemon.nickname,
					newNickname: nickname,
				});
			}
			onClose();
		}
	};

	const onChangeNickname = (e) => {
		setNickname(e.target.value);
		setErrorText("");
	};

	useEffect(() => {
		if (!!pokemon) setNickname(pokemon.nickname);
	}, [pokemon]);

	if (isCatchSuccess === true || isCatchSuccess === false)
		return (
			<Modal
				className={classes.modal}
				open={open}
				onClose={!isCatchSuccess ? onClose : undefined}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Grid container className={classes.content}>
						<Grid item xs={12} className={classes.modalTitle}>
							{isCatchSuccess === true ? (
								<>
									Congratulations!{" "}
									<img src={Pokeball} alt="Pokeball" />
								</>
							) : (
								"Aw.. That's Bad :("
							)}
						</Grid>
						<Grid item xs={12} className={classes.modalSubTitle}>
							{isCatchSuccess === true
								? "You have captured a pokemon, now give it a nickname!"
								: "You haven't successfully capture the pokemon. Don't be sad fellas, Let's try again!"}
						</Grid>
						{isCatchSuccess === true ? (
							<form onSubmit={updateNickname}>
								<Grid
									item
									xs={12}
									className={classes.nicknameInputContainer}
								>
									<TextField
										fullWidth
										autoFocus
										id="nickname"
										label="Nickname"
										error={!!errorText}
										helperText={errorText}
										onChange={onChangeNickname}
										value={nickname}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									className={classes.buttonContainer}
								>
									<Button
										className={`${classes.submitButton} ${classes.success}`}
										type="submit"
									>
										Submit
									</Button>
								</Grid>
							</form>
						) : (
							<Grid
								item
								xs={12}
								className={classes.buttonContainer}
							>
								<Button
									className={`${classes.closeButton} ${classes.danger}`}
									type="button"
									onClick={onClose}
								>
									Close
								</Button>
							</Grid>
						)}
					</Grid>
				</Fade>
			</Modal>
		);

	return null;
};

export default ModalCatchResult;
