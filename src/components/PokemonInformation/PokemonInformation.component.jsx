import { Chip, Divider, Grid } from "@material-ui/core";
import React, { useState } from "react";
import {
	cleanString,
	roundToTwoDigitsAfterComma,
} from "../../helpers/General.helper";
import { useStyles } from "./PokemonInformation.styles";

const PokemonInformation = (props) => {
	const { pokemon, nickname } = props;
	const classes = useStyles();
	const [isLoadAllMoves, setIsLoadAllMoves] = useState(false);

	const onClickisLoadAllMoves = () => {
		setIsLoadAllMoves(!isLoadAllMoves);
	};

	return (
		<>
			<Grid item xs={12} md={3}>
				<img
					className={classes.pokemonImage}
					src={pokemon.sprites.front_default}
					alt={pokemon.name}
					data-testid="pokemon-information-image"
				/>
			</Grid>
			<Grid
				item
				xs={12}
				className={classes.pokemonDetail}
				container
				justifyContent="flex-start"
				alignContent="flex-start"
				md={8}
			>
				<Grid item xs={12}>
					{pokemon.types.map((typeObj, key) => (
						<Chip
							key={key}
							label={typeObj.type.name}
							className={`${classes.chipType} ${typeObj.type.name}`}
							data-testid={`pokemon-information-${typeObj.type.name}`}
						/>
					))}
				</Grid>
				{!!nickname && (
					<>
						<Divider className={classes.horizontalDivider} />
						<Grid item xs={3} md={2} className={classes.label}>
							Nickname
						</Grid>
						<Grid item xs={1} md={1} className={classes.label}>
							:
						</Grid>
						<Grid
							item
							xs={8}
							md={9}
							data-testid="pokemon-information-nickname"
						>
							{nickname}
						</Grid>
					</>
				)}
				<Divider className={classes.horizontalDivider} />
				<Grid item xs={3} md={2} className={classes.label}>
					Name
				</Grid>
				<Grid item xs={1} md={1} className={classes.label}>
					:
				</Grid>
				<Grid
					item
					xs={8}
					md={9}
					className={classes.capitalized}
					data-testid="pokemon-information-name"
				>
					{pokemon.name}
				</Grid>

				<Divider className={classes.horizontalDivider} />
				<Grid item xs={3} md={2} className={classes.label}>
					Height
				</Grid>
				<Grid item xs={1} md={1} className={classes.label}>
					:
				</Grid>
				<Grid
					item
					xs={8}
					md={9}
					data-testid="pokemon-information-height"
				>
					{roundToTwoDigitsAfterComma(pokemon.height / 10)} m
				</Grid>

				<Divider className={classes.horizontalDivider} />
				<Grid item xs={3} md={2} className={classes.label}>
					Weight
				</Grid>
				<Grid item xs={1} md={1} className={classes.label}>
					:
				</Grid>
				<Grid
					item
					xs={8}
					md={9}
					data-testid="pokemon-information-weight"
				>
					{roundToTwoDigitsAfterComma(pokemon.weight / 10)} kg
				</Grid>

				<Divider className={classes.horizontalDivider} />
				<Grid item xs={3} md={2} className={classes.label}>
					Abilities
				</Grid>
				<Grid item xs={1} md={1} className={classes.label}>
					:
				</Grid>
				<Grid
					item
					xs={8}
					md={9}
					data-testid="pokemon-information-abilities"
				>
					{pokemon.abilities.length > 0 ? (
						<ol
							className={`${classes.orderedList} ${classes.capitalized}`}
						>
							{pokemon.abilities.map((abilityObj, key) => (
								<li
									key={key}
									data-testid="pokemon-information-ability"
								>
									{cleanString(abilityObj.ability.name)}{" "}
									{abilityObj.is_hidden ? (
										<>
											<span
												className={
													classes.hiddenAbbility
												}
												data-testid="pokemon-information-hidden-ability"
											>
												(hidden ability)
											</span>
										</>
									) : null}
								</li>
							))}
						</ol>
					) : (
						"-"
					)}
				</Grid>

				<Divider className={classes.horizontalDivider} />
				<Grid item xs={3} md={2} className={classes.label}>
					Moves
				</Grid>
				<Grid item xs={1} md={1} className={classes.label}>
					:
				</Grid>
				<Grid
					item
					xs={8}
					md={9}
					data-testid="pokemon-information-moves"
				>
					{pokemon.moves.length > 0 ? (
						<>
							<ol
								className={`${classes.orderedList} ${classes.capitalized}`}
							>
								{pokemon.moves
									.filter((obj, key) =>
										isLoadAllMoves ? !!obj : key < 5
									)
									.map((moveObj, key) => (
										<li
											key={key}
											className="moves"
											data-testid="pokemon-information-move"
										>
											{key !== 0 && <b> | </b>}
											{cleanString(moveObj.move.name)}
										</li>
									))}
							</ol>
							{pokemon.moves.length > 5 && (
								<span
									className={classes.loadAllButton}
									onClick={onClickisLoadAllMoves}
									data-testid="pokemon-information-load-hide-moves-button"
								>
									{isLoadAllMoves
										? "Hide Moves"
										: "Load All Moves"}
								</span>
							)}
						</>
					) : (
						"-"
					)}
				</Grid>
				<Divider className={classes.horizontalDivider} />
			</Grid>
		</>
	);
};

export default PokemonInformation;
