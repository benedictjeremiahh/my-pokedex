import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./PokemonItem.styles";
import PokeballOpen from "../../assets/img/pokeball_open.png";
import ModalReleaseConfirmation from "../ModalReleaseConfirmation/ModalReleaseConfirmation.component";
import useReleasePokemon from "../../hooks/ReleasePokemon.hooks";

const PokemonItem = (props) => {
	const { isMyPokemon, name, image, ownedCount, nickname } = props;
	const classes = useStyles({
		isMyPokemon,
	});
	const [showReleaseConfirmation, onReleaseClick, onConfirm] =
		useReleasePokemon({ nickname });

	const onClickLink = (e) => {
		const comesFromButton =
			e.target.tagName === "SPAN" || e.target.tagName === "BUTTON";
		if (comesFromButton) e.preventDefault();
	};

	return (
		<>
			<ModalReleaseConfirmation
				open={showReleaseConfirmation}
				nickname={nickname}
				onConfirm={onConfirm}
			/>

			<Grid
				component={Link}
				to={isMyPokemon ? `my-pokemon/${nickname}` : `pokemons/${name}`}
				item
				xs={isMyPokemon ? 12 : 5}
				sm={isMyPokemon ? 5 : 5}
				md={isMyPokemon ? 3 : 2}
				container
				className={classes.itemContainer}
				justifyContent="center"
				onClick={onClickLink}
			>
				<Grid item xs={12} className={classes.pokemonImageContainer}>
					<img src={image} alt={name} />
				</Grid>
				{isMyPokemon && (
					<Grid item xs={12} className={classes.pokemonNickname}>
						{nickname}
					</Grid>
				)}
				<Grid item xs={12} className={classes.pokemonName}>
					{name}
				</Grid>

				{!isMyPokemon && (
					<Grid item xs={12} className={classes.ownedCount}>
						Owned: {ownedCount}
					</Grid>
				)}

				{isMyPokemon && (
					<Grid
						item
						xs={12}
						className={classes.releaseButtonContainer}
					>
						<Button
							id="releaseButton"
							className={`${classes.releaseButton} ${classes.danger}`}
							onClick={onReleaseClick}
						>
							Release Me{" "}
							<img src={PokeballOpen} alt="PokeballOpen" />
						</Button>
					</Grid>
				)}
			</Grid>
		</>
	);
};

export default PokemonItem;
