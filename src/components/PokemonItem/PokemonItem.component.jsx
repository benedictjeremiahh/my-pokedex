import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./PokemonItem.styles";
import PokeballOpen from "../../assets/img/pokeball_open.png";

const PokemonItem = (props) => {
	const { isMyPokemon, name, image, ownedCount, nickname, onReleaseClick } =
		props;
	const classes = useStyles({
		isMyPokemon,
	});

	const onClickLink = (e) => {
		const comesFromButton =
			e.target.tagName === "SPAN" || e.target.tagName === "BUTTON";
		if (comesFromButton) e.preventDefault();
	};

	const onButtonReleaseClick = () => {
		onReleaseClick(nickname);
	};

	return (
		<>
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
				data-testid="pokemon-item-link"
			>
				<Grid item xs={12} className={classes.pokemonImageContainer}>
					<img
						src={image}
						alt={name}
						data-testid="pokemon-item-image"
					/>
				</Grid>
				{isMyPokemon && (
					<Grid
						item
						xs={12}
						className={classes.pokemonNickname}
						data-testid="pokemon-item-nickname"
					>
						{nickname}
					</Grid>
				)}
				<Grid
					item
					xs={12}
					className={classes.pokemonName}
					data-testid="pokemon-item-name"
				>
					{name}
				</Grid>

				{!isMyPokemon && (
					<Grid
						item
						xs={12}
						className={classes.ownedCount}
						data-testid="pokemon-item-owned-count"
					>
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
							onClick={onButtonReleaseClick}
							data-testid="pokemon-item-release-button"
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
