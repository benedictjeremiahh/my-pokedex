import { useQuery } from "@apollo/client";
import { Button, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory, useParams } from "react-router";
import LoadingBackdrop from "../../components/LoadingBackdrop/LoadingBackdrop.component";
import { GET_POKEMON_BY_NAME } from "../../graphql/queries/PokemonDetail.queries";
import { useStyles } from "./MyPokemonDetail.styles";
import PokeballOpen from "../../assets/img/pokeball_open.png";
import PokemonInformation from "../../components/PokemonInformation/PokemonInformation.component";
import { PokemonContext } from "../../providers/pokemon/pokemon.provider";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.component";
import useReleasePokemon from "../../hooks/ReleasePokemon.hooks";
import ModalReleaseConfirmation from "../../components/ModalReleaseConfirmation/ModalReleaseConfirmation.component";

const MyPokemonDetail = () => {
	const classes = useStyles();
	const history = useHistory();
	const { nickname } = useParams();
	const { myPokemons } = useContext(PokemonContext);
	const [showReleaseConfirmation, onReleaseClick, onConfirm] =
		useReleasePokemon();

	const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
		variables: {
			name: myPokemons.find(
				(myPokemon) => myPokemon.nickname === nickname
			).name,
		},
	});

	const onConfirmInsideDetail = (isReleased) => {
		onConfirm(isReleased);

		if (isReleased) history.push("/my-pokemon");
	};

	const onButtonReleaseClick = () => {
		onReleaseClick(nickname);
	};

	if (!!error) return <ErrorMessage />;
	return (
		<>
			<LoadingBackdrop
				open={loading}
				color="#D579C8"
				backgroundColor="white"
			/>
			<ModalReleaseConfirmation
				open={showReleaseConfirmation}
				nickname={nickname}
				onConfirm={onConfirmInsideDetail}
			/>

			{!!data && (
				<>
					<Grid
						container
						justifyContent="space-between"
						className={classes.container}
						data-testid="my-pokemon-detail-container"
					>
						<PokemonInformation
							pokemon={data.pokemon}
							nickname={nickname}
						/>
						<Grid
							item
							xs={12}
							className={classes.releaseButtonContainer}
						>
							<Button
								className={`${classes.releaseButton} ${classes.danger}`}
								onClick={onButtonReleaseClick}
								data-testid="my-pokemon-release-button"
							>
								Release Me{" "}
								<img src={PokeballOpen} alt="PokeballOpen" />
							</Button>
						</Grid>
					</Grid>
				</>
			)}
		</>
	);
};

export default MyPokemonDetail;
