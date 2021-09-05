import {
	Backdrop,
	Button,
	Fade,
	Grid,
	Modal,
	TextField,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useStyles } from "./ModalCatchResult.styles";
import Pokeball from "../../assets/img/pokeball.png";
import { PokemonContext } from "../../providers/pokemon/pokemon.provider";

const ModalCatchResult = (props) => {
	const { open, isCatchSuccess, onClose, pokemon } = props;
	const classes = useStyles();
	const { addPokemon, myPokemons } = useContext(PokemonContext);
	const [errorText, setErrorText] = useState(null);

	const submitNickname = () => {
		const nickname = document.getElementById("nickname").value;

		const checkNicknameExist = myPokemons.find(
			(pokemon) => pokemon.nickname === nickname
		);

		if (!!checkNicknameExist) {
			setErrorText(
				"This nickname is already been taken, please choose another nickname"
			);
		} else {
			addPokemon({
				nickname,
				name: pokemon.name,
				image: pokemon.sprites.front_default,
			});
			onClose();
		}
	};

	const onChangeNickname = () => {
		setErrorText("");
	};

	if (isCatchSuccess === true || isCatchSuccess === false)
		return (
			<Modal
				aria-labelledby="modal-catch-result-title"
				aria-describedby="modal-catch-result-description"
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
							<>
								<Grid
									item
									xs={12}
									className={classes.nicknameInputContainer}
								>
									<TextField
										fullWidth
										id="nickname"
										label="Nickname"
										error={!!errorText}
										helperText={errorText}
										onChange={onChangeNickname}
										defaultValue={pokemon.name}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									className={classes.buttonContainer}
								>
									<Button
										className={classes.submitButton}
										onClick={submitNickname}
									>
										Submit
									</Button>
								</Grid>
							</>
						) : (
							<Grid
								item
								xs={12}
								className={classes.buttonContainer}
							>
								<Button
									className={classes.closeButton}
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
