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
		path: "/",
		component: PokemonList,
	},
	{
		path: "/pokemons/:name",
		component: PokemonDetail,
	},
	{
		path: "/my-pokemon",
		component: MyPokemon,
	},
	{
		path: "/my-pokemon/:nickname",
		component: MyPokemonDetail,
	},
];
