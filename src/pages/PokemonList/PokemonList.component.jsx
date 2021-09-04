import { useQuery } from "@apollo/client";
import { Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import LoadingBackdrop from "../../components/LoadingBackdrop/LoadingBackdrop.component";
import { GET_POKEMON_LIST } from "../../graphql/queries/PokemonList.queries";
import { useStyles } from "./PokemonList.styles";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

const PokemonList = () => {
	const classes = useStyles();
	const limit = 20;
	const [page, setPage] = useState(1);
	const [offset, setOffset] = useState(1);

	const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
		variables: { limit: limit, offset: offset },
	});

	console.log(data);

	const onChangePagination = (e, pageNumber) => {
		setPage(pageNumber);
		if (pageNumber === 1) {
			setOffset(1);
		} else {
			setOffset((pageNumber - 1) * limit + 1);
		}
	};
	return (
		<>
			<LoadingBackdrop
				open={loading}
				color="#D579C8"
				backgroundColor="white"
			/>

			<Grid container className={classes.container}>
				{!!error ? (
					<h3>Oops... Something happened, please try again...</h3>
				) : (
					<>
						<Grid container item xs={12} justifyContent="center">
							{!!data &&
								data.pokemons.results.map((pokemon, key) => (
									<Link
										to={`pokemons/${pokemon.name}`}
										key={key}
									>
										<Paper
											elevation={3}
											className={classes.pokemonItem}
										>
											<Grid container>
												<Grid item xs={3}>
													<img
														className={
															classes.pokemonImage
														}
														src={pokemon.image}
														alt={pokemon.name}
													/>
												</Grid>
												<Grid
													item
													xs={9}
													className={
														classes.pokemonName
													}
												>
													{pokemon.name}
												</Grid>
											</Grid>
										</Paper>
									</Link>
								))}
						</Grid>
						<Grid
							item
							xs={12}
							className={classes.paginationContainer}
						>
							{!!data && (
								<Pagination
									page={page}
									size="small"
									count={Math.ceil(
										data.pokemons.count / limit
									)}
									onChange={onChangePagination}
									variant="outlined"
									shape="rounded"
								/>
							)}
						</Grid>
					</>
				)}
			</Grid>
		</>
	);
};

export default PokemonList;
