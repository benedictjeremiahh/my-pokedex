import { lazy } from "react";

const PokemonDetail = lazy(() =>
	import("../pages/PokemonDetail/PokemonDetail.component")
);
const PokemonList = lazy(() =>
	import("../pages/PokemonList/PokemonList.component")
);
const MyPokemon = lazy(() => import("../pages/MyPokemon/MyPokemon.component"));
const MyPokemonDetail = lazy(() =>
	import("../pages/MyPokemonDetail/MyPokemonDetail.component")
);

export const routes = [
	{
		path: `${process.env.PUBLIC_URL}/`,
		component: PokemonList,
	},
	{
		path: `${process.env.PUBLIC_URL}/pokemons/:name`,
		component: PokemonDetail,
	},
	{
		path: `${process.env.PUBLIC_URL}/my-pokemon`,
		component: MyPokemon,
	},
	{
		path: `${process.env.PUBLIC_URL}/my-pokemon/:nickname`,
		component: MyPokemonDetail,
	},
];
