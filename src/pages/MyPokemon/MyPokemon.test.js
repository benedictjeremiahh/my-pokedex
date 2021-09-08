import { screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { renderWithRouterAndPokemonProvider } from "../../test.utils";
import MyPokemon from "./MyPokemon.component";

const mockLS = [
	{
		id: 1,
		name: "ivysaur",
		nickname: "ivysaur",
	},
	{
		id: 2,
		name: "ivysaur",
		nickname: "ivysaur1",
	},
];
const limit = 20;

describe("<MyPokemon />", () => {
	test("renders my pokemon page without error", () => {
		const route = "/my-pokemon";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));
		renderWithRouterAndPokemonProvider(<MyPokemon />, { history });

		const emptyMessage = screen.queryByTestId("my-pokemon-empty-message");
		expect(emptyMessage).not.toBeInTheDocument();

		const pokemonItem = screen.queryAllByTestId("pokemon-item-link");
		expect(pokemonItem.length).toBe(mockLS.length);

		const pagination = screen.queryByTestId("pagination");
		expect(pagination).toBeInTheDocument();
	});

	test("renders my pokemon page with empty pokemon", () => {
		const route = "/my-pokemon";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify([]));
		renderWithRouterAndPokemonProvider(<MyPokemon />, { history });

		const emptyMessage = screen.queryByTestId("my-pokemon-empty-message");
		expect(emptyMessage).toBeInTheDocument();

		const pokemonItem = screen.queryAllByTestId("pokemon-item-link");
		expect(pokemonItem.length).toBe(0);

		const pagination = screen.queryByTestId("pagination");
		expect(pagination).not.toBeInTheDocument();
	});

	test("pagination works", () => {
		const route = "/my-pokemon";
		let mockManyMyPokemon = [];
		for (let i = 0; i < 50; i++) {
			mockManyMyPokemon.push({
				id: i,
				name: "ivysaur",
				nickname: `ivysaur${i}`,
			});
		}

		const totalPage = Math.ceil(50 / limit);

		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify(mockManyMyPokemon));
		renderWithRouterAndPokemonProvider(<MyPokemon />, { history });

		const pokemonItem = screen.queryAllByTestId("pokemon-item-link");
		expect(pokemonItem.length).toBe(20);

		const pages = screen.queryAllByTestId("pagination-item");
		expect(pages.length).toBe(totalPage + 2); // 2 with prev and next button

		fireEvent.click(pages[2]); // click page 2
		expect(pokemonItem[0]).toHaveAttribute("href", "/my-pokemon/ivysaur21");
		fireEvent.click(pages[3]); // click page 3
		expect(pokemonItem[0]).toHaveAttribute("href", "/my-pokemon/ivysaur41");
		fireEvent.click(pages[1]); // click page 1
		expect(pokemonItem[0]).toHaveAttribute("href", "/my-pokemon/ivysaur0");
	});
});
