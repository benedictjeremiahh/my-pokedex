import { Grid } from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";
import React, { useContext } from "react";
import ModalReleaseConfirmation from "../../components/ModalReleaseConfirmation/ModalReleaseConfirmation.component";
import PokemonItem from "../../components/PokemonItem/PokemonItem.component";
import usePagination from "../../hooks/Pagination.hooks";
import useReleasePokemon from "../../hooks/ReleasePokemon.hooks";
import { PokemonContext } from "../../providers/pokemon/pokemon.provider";
import { useStyles } from "./MyPokemon.styles";

const MyPokemon = () => {
	const classes = useStyles();
	const limit = 20;
	const [page, offset, onChangePagination] = usePagination({
		defaultPage: 1,
		defaultOffset: 0,
		limit,
	});
	const [showReleaseConfirmation, onReleaseClick, onConfirm, nickname] =
		useReleasePokemon();

	const { myPokemons } = useContext(PokemonContext);

	return (
		<>
			<ModalReleaseConfirmation
				open={showReleaseConfirmation}
				nickname={nickname}
				onConfirm={onConfirm}
			/>
			<Grid
				container
				className={classes.container}
				justifyContent="space-evenly"
			>
				{myPokemons.length === 0 && (
					<h4
						className={classes.emptyMessage}
						data-testid="my-pokemon-empty-message"
					>
						You don't have any pokemon yet, start catching them!
					</h4>
				)}
				{myPokemons.length > 0 && (
					<>
						{myPokemons
							.filter(
								(pokemon, key) =>
									key >= offset && key < offset + limit
							)
							.map((pokemon, key) => (
								<PokemonItem
									key={key}
									isMyPokemon
									name={pokemon.name}
									nickname={pokemon.nickname}
									image={pokemon.image}
									ownedCount={0}
									onReleaseClick={onReleaseClick}
								/>
							))}
						<Grid
							item
							xs={12}
							className={classes.paginationContainer}
						>
							{!!myPokemons && (
								<Pagination
									page={page}
									size="small"
									count={Math.ceil(myPokemons.length / limit)}
									onChange={onChangePagination}
									variant="outlined"
									shape="rounded"
									data-testid="pagination"
									renderItem={(item) => (
										<PaginationItem
											{...item}
											data-testid="pagination-item"
										/>
									)}
								/>
							)}
						</Grid>
					</>
				)}
			</Grid>
		</>
	);
};

export default MyPokemon;
