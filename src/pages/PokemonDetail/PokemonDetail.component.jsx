import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import LoadingBackdrop from "../../components/LoadingBackdrop/LoadingBackdrop.component";
import { GET_POKEMON_BY_NAME } from "../../graphql/queries/PokemonDetail.queries";

const PokemonDetail = () => {
	const { name } = useParams();

	const { loading, error, data } = useQuery(GET_POKEMON_BY_NAME, {
		variables: { name: name },
	});

	console.log(data);

	return (
		<>
			<LoadingBackdrop
				open={loading}
				color="#D579C8"
				backgroundColor="white"
			/>
		</>
	);
};

export default PokemonDetail;
