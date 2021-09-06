import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useContext, useState } from "react";
import PokemonItem from "../../components/PokemonItem/PokemonItem.component";
import usePagination from "../../hooks/Pagination.hooks";
import { PokemonContext } from "../../providers/pokemon/pokemon.provider";
import { useStyles } from "./MyPokemon.styles";

const MyPokemon = () => {
	const classes = useStyles();
	const limit = 20;
	const [page, offset, onChangePagination] = usePagination({
		defaultPage: 1,
		defaultOffset: 1,
		limit,
	});
	const { myPokemons, releasePokemon } = useContext(PokemonContext);

	return (
		<Grid container className={classes.container}>
			{myPokemons
				.filter(
					(pokemon, key) =>
						key + 1 >= offset && key + 1 < offset + limit
				)
				.map((pokemon, key) => (
					<PokemonItem
						key={key}
						isMyPokemon
						name={pokemon.name}
						nickname={pokemon.nickname}
						image={pokemon.image}
						ownedCount={0}
					/>
				))}
			<Grid item xs={12} className={classes.paginationContainer}>
				{!!myPokemons && (
					<Pagination
						page={page}
						size="small"
						count={Math.ceil(myPokemons.length / limit)}
						onChange={onChangePagination}
						variant="outlined"
						shape="rounded"
					/>
				)}
			</Grid>
		</Grid>
	);
};

export default MyPokemon;
