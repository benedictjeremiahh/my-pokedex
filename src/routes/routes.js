import { lazy } from "react";

const PokemonDetail = lazy(() =>
	import("../pages/PokemonDetail/PokemonDetail.component")
);
const PokemonList = lazy(() =>
	import("../pages/PokemonList/PokemonList.component")
);

export const routes = [
	{
		path: "/",
		component: PokemonList,
	},
	{
		path: "/pokemons/:name",
		component: PokemonDetail,
	},
];
