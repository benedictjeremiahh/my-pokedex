import { useQuery } from "@apollo/client";
import { Button, Chip, Divider, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router";
import LoadingBackdrop from "../../components/LoadingBackdrop/LoadingBackdrop.component";
import { GET_POKEMON_BY_NAME } from "../../graphql/queries/PokemonDetail.queries";
import {
	cleanString,
	roundToTwoDigitsAfterComma,
} from "../../helpers/general.helper";
import { useStyles } from "./PokemonDetail.styles";
import Pokeball from "../../assets/img/pokeball.png";
import LoadingBackdropCatch from "../../components/LoadingBackdropCatch/LoadingBackdropCatch.component";
import ModalCatchResult from "../../components/ModalCatchResult/ModalCatchResult.component";

const PokemonDetail = () => {
	const classes = useStyles();
	const { name } = useParams();
	const [isLoadAllMoves, setIsLoadAllMoves] = useState(false);
	const [catchLoading, setCatchLoading] = useState(false);
	const [isCatchSuccess, setIsCatchSuccess] = useState(null);

	const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
		variables: { name: name },
	});

	if (!!error)
		return <h3>Oops... Something happened, please try again...</h3>;

	const onClickisLoadAllMoves = () => {
		setIsLoadAllMoves(!isLoadAllMoves);
	};

	const catchPokemon = () => {
		setCatchLoading(true);

		const isSuccess = Math.round(Math.random()) === 1;

		setTimeout(() => {
			setIsCatchSuccess(isSuccess);
			setCatchLoading(false);
		}, 5000);
	};

	const onModalResultClose = () => {
		setIsCatchSuccess(null);
	};

	return (
		<>
			<LoadingBackdrop
				open={loading}
				color="#D579C8"
				backgroundColor="white"
			/>
			<LoadingBackdropCatch open={catchLoading} />

			{!!data && (
				<>
					<ModalCatchResult
						open={isCatchSuccess !== null}
						isCatchSuccess={isCatchSuccess}
						onClose={onModalResultClose}
						pokemon={data.pokemon}
					/>

					<Grid
						container
						justifyContent="center"
						className={classes.container}
					>
						<Grid item xs={12}>
							<img
								className={classes.pokemonImage}
								src={data.pokemon.sprites.front_default}
								alt={data.pokemon.name}
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
								{data.pokemon.types.map((typeObj, key) => (
									<Chip
										key={key}
										label={typeObj.type.name}
										className={`${classes.chipType} ${typeObj.type.name}`}
									/>
								))}
							</Grid>
							<Divider className={classes.horizontalDivider} />
							<Grid item xs={3} className={classes.label}>
								Name
							</Grid>
							<Grid item xs={1} className={classes.label}>
								:
							</Grid>
							<Grid item xs={8} className={classes.capitalized}>
								{data.pokemon.name}
							</Grid>

							<Divider className={classes.horizontalDivider} />
							<Grid item xs={3} className={classes.label}>
								Height
							</Grid>
							<Grid item xs={1} className={classes.label}>
								:
							</Grid>
							<Grid item xs={8}>
								{roundToTwoDigitsAfterComma(
									data.pokemon.height / 10
								)}{" "}
								m
							</Grid>

							<Divider className={classes.horizontalDivider} />
							<Grid item xs={3} className={classes.label}>
								Weight
							</Grid>
							<Grid item xs={1} className={classes.label}>
								:
							</Grid>
							<Grid item xs={8}>
								{roundToTwoDigitsAfterComma(
									data.pokemon.weight / 10
								)}{" "}
								kg
							</Grid>

							<Divider className={classes.horizontalDivider} />
							<Grid item xs={3} className={classes.label}>
								Abilities
							</Grid>
							<Grid item xs={1} className={classes.label}>
								:
							</Grid>
							<Grid item xs={8}>
								<ol
									className={`${classes.orderedList} ${classes.capitalized}`}
								>
									{data.pokemon.abilities.map(
										(abilityObj, key) => (
											<li key={key}>
												{cleanString(
													abilityObj.ability.name
												)}{" "}
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
										)
									)}
								</ol>
							</Grid>

							<Divider className={classes.horizontalDivider} />
							<Grid item xs={3} className={classes.label}>
								Moves
							</Grid>
							<Grid item xs={1} className={classes.label}>
								:
							</Grid>
							<Grid item xs={8}>
								<ol
									className={`${classes.orderedList} ${classes.capitalized}`}
								>
									{data.pokemon.moves
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
							</Grid>
							<Divider className={classes.horizontalDivider} />
							<Grid
								item
								xs={12}
								className={classes.catchButtonContainer}
							>
								<Button
									className={classes.catchButton}
									onClick={catchPokemon}
								>
									<img src={Pokeball} alt="Pokeball" /> Catch
									Me!
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
};

export default PokemonDetail;
