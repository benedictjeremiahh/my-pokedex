import { useQuery } from "@apollo/client";
import { Grid, Paper } from "@material-ui/core";
import React, { useContext, useState } from "react";
import LoadingBackdrop from "../../components/LoadingBackdrop/LoadingBackdrop.component";
import { GET_POKEMON_LIST } from "../../graphql/queries/PokemonList.queries";
import { useStyles } from "./PokemonList.styles";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { getMyPokemonCount } from "../../helpers/PokemonList.helper";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.component";
import PokemonItem from "../../components/PokemonItem/PokemonItem.component";
import { PokemonContext } from "../../providers/pokemon/pokemon.provider";
import usePagination from "../../hooks/Pagination.hooks";

const PokemonList = () => {
	const classes = useStyles();
	const limit = 20;
	const [page, offset, onChangePagination] = usePagination({
		defaultPage: 1,
		defaultOffset: 1,
		limit,
	});
	const { myPokemons } = useContext(PokemonContext);

	const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
		variables: { limit: limit, offset: offset },
	});

	if (!!error) return <ErrorMessage />;

	return (
		<>
			<LoadingBackdrop
				open={loading}
				color="#D579C8"
				backgroundColor="white"
			/>

			<Grid container className={classes.container}>
				{!!data &&
					data.pokemons.results.map((pokemon, key) => (
						<PokemonItem
							key={key}
							name={pokemon.name}
							image={pokemon.image}
							ownedCount={getMyPokemonCount(
								myPokemons,
								pokemon.name
							)}
						/>
					))}
				<Grid item xs={12} className={classes.paginationContainer}>
					{!!data && (
						<Pagination
							page={page}
							size="small"
							count={Math.ceil(data.pokemons.count / limit)}
							onChange={onChangePagination}
							variant="outlined"
							shape="rounded"
						/>
					)}
				</Grid>
			</Grid>
		</>
	);
};

export default PokemonList;
