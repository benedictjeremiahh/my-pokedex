import { useQuery } from "@apollo/client";
import { Button, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import LoadingBackdrop from "../../components/LoadingBackdrop/LoadingBackdrop.component";
import { GET_POKEMON_BY_NAME } from "../../graphql/queries/PokemonDetail.queries";
import { useStyles } from "./PokemonDetail.styles";
import Pokeball from "../../assets/img/pokeball.png";
import LoadingBackdropCatch from "../../components/LoadingBackdropCatch/LoadingBackdropCatch.component";
import ModalCatchResult from "../../components/ModalCatchResult/ModalCatchResult.component";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.component";
import useCatchPokemon from "../../hooks/CatchPokemon.hooks";
import PokemonInformation from "../../components/PokemonInformation/PokemonInformation.component";

const PokemonDetail = () => {
	const classes = useStyles();
	const { name } = useParams();
	const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
		variables: { name: name },
	});
	const [
		isCatchLoading,
		isCatchSuccess,
		newPokemon,
		catchPokemon,
		setPokemon,
		setIsCatchSuccess,
	] = useCatchPokemon();

	useEffect(() => {
		if (!!data) setPokemon(data.pokemon);
	}, [data, setPokemon]);

	const onModalResultClose = () => {
		setIsCatchSuccess(null);
	};

	if (!!error) return <ErrorMessage />;
	return (
		<>
			<LoadingBackdrop
				open={loading}
				color="#D579C8"
				backgroundColor="white"
			/>
			<LoadingBackdropCatch open={isCatchLoading} />

			{!!data && (
				<>
					<ModalCatchResult
						open={isCatchSuccess !== null}
						isCatchSuccess={isCatchSuccess}
						onClose={onModalResultClose}
						pokemon={newPokemon}
					/>

					<Grid
						container
						justifyContent="space-between"
						className={classes.container}
					>
						<PokemonInformation pokemon={data.pokemon} />
						<Grid
							item
							xs={12}
							className={classes.catchButtonContainer}
						>
							<Button
								className={`${classes.catchButton} ${classes.success}`}
								onClick={catchPokemon}
								data-testid="pokemon-detail-catch-button"
							>
								Catch Me <img src={Pokeball} alt="Pokeball" />
							</Button>
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
};

export default PokemonDetail;
