import { Button, Chip, Divider, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {
	cleanString,
	roundToTwoDigitsAfterComma,
} from "../../helpers/General.helper";
import { useStyles } from "./PokemonInformation.styles";
import EditIcon from "../../assets/svg/edit_icon.svg";
import SaveIconWhite from "../../assets/svg/save_icon_white.svg";

const PokemonInformation = (props) => {
	const { pokemon, nickname } = props;
	const classes = useStyles();
	const [isLoadAllMoves, setIsLoadAllMoves] = useState(false);

	const onClickisLoadAllMoves = () => {
		setIsLoadAllMoves(!isLoadAllMoves);
	};

	return (
		<>
			<Grid item xs={12}>
				<img
					className={classes.pokemonImage}
					src={pokemon.sprites.front_default}
					alt={pokemon.name}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				className={classes.pokemonDetail}
				container
				justifyContent="flex-start"
				alignContent="flex-start"
			>
				<Grid item xs={12}>
					{pokemon.types.map((typeObj, key) => (
						<Chip
							key={key}
							label={typeObj.type.name}
							className={`${classes.chipType} ${typeObj.type.name}`}
						/>
					))}
				</Grid>
				{!!nickname && (
					<>
						<Divider className={classes.horizontalDivider} />
						<Grid item xs={3} className={classes.label}>
							Nickname
						</Grid>
						<Grid item xs={1} className={classes.label}>
							:
						</Grid>
						<Grid item xs={8}>
							{nickname}
						</Grid>
					</>
				)}
				<Divider className={classes.horizontalDivider} />
				<Grid item xs={3} className={classes.label}>
					Name
				</Grid>
				<Grid item xs={1} className={classes.label}>
					:
				</Grid>
				<Grid item xs={8} className={classes.capitalized}>
					{pokemon.name}
				</Grid>

				<Divider className={classes.horizontalDivider} />
				<Grid item xs={3} className={classes.label}>
					Height
				</Grid>
				<Grid item xs={1} className={classes.label}>
					:
				</Grid>
				<Grid item xs={8}>
					{roundToTwoDigitsAfterComma(pokemon.height / 10)} m
				</Grid>

				<Divider className={classes.horizontalDivider} />
				<Grid item xs={3} className={classes.label}>
					Weight
				</Grid>
				<Grid item xs={1} className={classes.label}>
					:
				</Grid>
				<Grid item xs={8}>
					{roundToTwoDigitsAfterComma(pokemon.weight / 10)} kg
				</Grid>

				<Divider className={classes.horizontalDivider} />
				<Grid item xs={3} className={classes.label}>
					Abilities
				</Grid>
				<Grid item xs={1} className={classes.label}>
					:
				</Grid>
				<Grid item xs={8}>
					{pokemon.abilities.length > 0 ? (
						<ol
							className={`${classes.orderedList} ${classes.capitalized}`}
						>
							{pokemon.abilities.map((abilityObj, key) => (
								<li key={key}>
									{cleanString(abilityObj.ability.name)}{" "}
									{abilityObj.is_hidden ? (
										<>
											<span
												className={
													classes.hiddenAbbility
												}
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
				<Grid item xs={3} className={classes.label}>
					Moves
				</Grid>
				<Grid item xs={1} className={classes.label}>
					:
				</Grid>
				<Grid item xs={8}>
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
										<li key={key}>
											{cleanString(moveObj.move.name)}
										</li>
									))}
							</ol>
							<span
								className={classes.loadAllButton}
								onClick={onClickisLoadAllMoves}
							>
								{isLoadAllMoves
									? "Hide Moves"
									: "Load All Moves"}
							</span>
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
