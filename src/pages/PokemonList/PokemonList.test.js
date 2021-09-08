import { screen, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import {
	renderWithRouter,
	renderWithRouterAndPokemonProvider,
} from "../../test.utils";
import { MockedProvider } from "@apollo/client/testing";
import { Route } from "react-router";
import { GET_POKEMON_LIST } from "../../graphql/queries/PokemonList.queries";
import PokemonList from "./PokemonList.component";

const successMocks = [
	{
		request: {
			query: GET_POKEMON_LIST,
			variables: {
				limit: 20,
				offset: 0,
			},
		},
		result: {
			data: {
				pokemons: {
					status: true,
					message: "",
					next: "",
					previous: "",
					count: 2,
					results: [
						{
							image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
							name: "bulbasaur",
						},
						{
							image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
							name: "ivysaur",
						},
					],
				},
			},
		},
	},
];

const failMocks = [
	{
		request: {
			query: GET_POKEMON_LIST,
			variables: {
				limit: 20,
				offset: 0,
			},
		},
		error: new Error("An error occurred"),
	},
];

const mockLS = [
	{
		id: 1,
		nickname: "ivysaur",
		name: "ivysaur",
		image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
	},
	{
		id: 2,
		nickname: "ivysaur2",
		name: "ivysaur",
		image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
	},
];

describe("<PokemonList />", () => {
	test("renders pokemon list page without error", async () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });

		renderWithRouter(
			<MockedProvider mocks={successMocks} addTypename={false}>
				<PokemonList />
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		const pokemonItemLink = screen.queryAllByTestId("pokemon-item-link");
		expect(pokemonItemLink.length).toBe(2);

		const pagination = screen.queryByTestId("pagination");
		expect(pagination).toBeInTheDocument();
	});

	test("fail call to graphql renders error message", async () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });

		renderWithRouter(
			<MockedProvider mocks={failMocks} addTypename={false}>
				<PokemonList />
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		const pokemonListContainer = screen.queryByTestId(
			"pokemon-list-container"
		);
		expect(pokemonListContainer).not.toBeInTheDocument();

		const errorMessage = screen.queryByTestId("error-message");
		expect(errorMessage).toBeInTheDocument();
	});

	test("ownedCount is in correct amount", async () => {
		const route = "/my-pokemon/ivysaur1";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));

		renderWithRouterAndPokemonProvider(
			<MockedProvider mocks={successMocks} addTypename={false}>
				<PokemonList />
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		const correctAmount = 2;

		const pokemonItemName = screen.queryAllByTestId("pokemon-item-link");
		const pokemonItemOwnedCount = pokemonItemName[1].querySelector(
			`[data-testid="pokemon-item-owned-count"]`
		);
		expect(pokemonItemOwnedCount).toHaveTextContent(correctAmount);
	});
});
