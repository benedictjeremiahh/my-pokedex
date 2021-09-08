import { screen, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { GET_POKEMON_BY_NAME } from "../../graphql/queries/PokemonDetail.queries";
import {
	renderWithProviders,
	renderWithRouterAndPokemonProvider,
} from "../../test.utils";
import { MockedProvider } from "@apollo/client/testing";
import PokemonDetail from "./PokemonDetail.component";
import { Route } from "react-router";

const successMocks = [
	{
		request: {
			query: GET_POKEMON_BY_NAME,
			variables: {
				name: "ivysaur",
			},
		},
		result: {
			data: {
				pokemon: {
					id: 3,
					status: true,
					message: "",
					name: "ivysaur",
					sprites: {
						front_default:
							"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
					},
					types: [
						{
							type: {
								name: "grass",
							},
						},
					],
					abilities: [
						{
							ability: {
								name: "overgrow",
							},
							is_hidden: false,
						},
						{
							ability: {
								name: "chlorophyll",
							},
							is_hidden: true,
						},
					],
					moves: [
						{
							move: {
								name: "swords-dance",
							},
						},
						{
							move: {
								name: "cut",
							},
						},
					],
					height: 10,
					weight: 130,
				},
				nickname: "ivysaur1",
			},
		},
	},
];

const failMocks = [
	{
		request: {
			query: GET_POKEMON_BY_NAME,
			variables: {
				name: "ivysaur",
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
];

describe("<PokemonDetail />", () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});
	afterEach(() => {
		jest.runOnlyPendingTimers();
		jest.useRealTimers();
	});
	test("renders pokemon detail page without error", async () => {
		const route = "/pokemons/ivysaur";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));

		renderWithRouterAndPokemonProvider(
			<MockedProvider mocks={successMocks} addTypename={false}>
				<Route exact path="/pokemons/:name">
					<PokemonDetail />
				</Route>
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		const pokemonInformationNickname = screen.queryByTestId(
			"pokemon-information-nickname"
		);
		expect(pokemonInformationNickname).not.toBeInTheDocument();

		const pokemonInformationName = screen.getByTestId(
			"pokemon-information-name"
		);
		expect(pokemonInformationName).toHaveTextContent("ivysaur");
	});

	test("fail call to graphql renders error message", async () => {
		const route = "/pokemons/ivysaur";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));

		renderWithRouterAndPokemonProvider(
			<MockedProvider mocks={failMocks} addTypename={false}>
				<Route exact path="/pokemons/:name">
					<PokemonDetail />
				</Route>
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		const myPokemonDetailContainer = screen.queryByTestId(
			"my-pokemon-detail-container"
		);
		expect(myPokemonDetailContainer).not.toBeInTheDocument();

		const errorMessage = screen.queryByTestId("error-message");
		expect(errorMessage).toBeInTheDocument();
	});

	test("on success catch first pokemon", async () => {
		const mockMath = Object.create(global.Math);
		mockMath.random = () => 1;
		global.Math = mockMath;

		const route = "/pokemons/ivysaur";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.removeItem("myPokemons");

		renderWithProviders(
			<MockedProvider mocks={successMocks} addTypename={false}>
				<Route exact path="/pokemons/:name">
					<PokemonDetail />
				</Route>
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		const loadingBackdropCatch = screen.queryByTestId(
			"loading-backdrop-catch"
		);
		expect(loadingBackdropCatch).not.toBeVisible();

		const catchButton = screen.queryByTestId("pokemon-detail-catch-button");
		fireEvent.click(catchButton);

		expect(loadingBackdropCatch).toBeVisible();

		let modalCatchResult = screen.queryByTestId("modal-catch-result");
		expect(modalCatchResult).not.toBeInTheDocument();

		await waitFor(() => {
			modalCatchResult = screen.queryByTestId("modal-catch-result");
			expect(modalCatchResult).toBeVisible();

			expect(loadingBackdropCatch).not.toBeVisible();
		});

		const modalCatchTitle = screen.queryByTestId("modal-catch-title");
		expect(modalCatchTitle).toHaveTextContent("Congratulations");

		const updatedLS = [
			{
				id: 1,
				nickname: "ivysaur",
				name: "ivysaur",
				image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
			},
		];

		expect(localStorage.getItem("myPokemons")).toEqual(
			JSON.stringify(updatedLS)
		);

		const submitButton = screen.getByTestId("modal-catch-submit-button");
		fireEvent.click(submitButton);

		modalCatchResult = screen.queryByTestId("modal-catch-result");
		expect(modalCatchResult).not.toBeInTheDocument();
	});

	test("on success catch second pokemon", async () => {
		const mockMath = Object.create(global.Math);
		mockMath.random = () => 1;
		global.Math = mockMath;

		const route = "/pokemons/ivysaur";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));

		renderWithProviders(
			<MockedProvider mocks={successMocks} addTypename={false}>
				<Route exact path="/pokemons/:name">
					<PokemonDetail />
				</Route>
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		const loadingBackdropCatch = screen.queryByTestId(
			"loading-backdrop-catch"
		);
		expect(loadingBackdropCatch).not.toBeVisible();

		const catchButton = screen.queryByTestId("pokemon-detail-catch-button");
		fireEvent.click(catchButton);

		expect(loadingBackdropCatch).toBeVisible();

		let modalCatchResult = screen.queryByTestId("modal-catch-result");
		expect(modalCatchResult).not.toBeInTheDocument();

		await waitFor(() => {
			modalCatchResult = screen.queryByTestId("modal-catch-result");
			expect(modalCatchResult).toBeVisible();

			expect(loadingBackdropCatch).not.toBeVisible();
		});

		const modalCatchTitle = screen.queryByTestId("modal-catch-title");
		expect(modalCatchTitle).toHaveTextContent("Congratulations");

		const updatedLS = [
			...mockLS,
			{
				id: 2,
				nickname: "ivysaur1",
				name: "ivysaur",
				image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
			},
		];

		expect(localStorage.getItem("myPokemons")).toEqual(
			JSON.stringify(updatedLS)
		);

		const submitButton = screen.getByTestId("modal-catch-submit-button");
		fireEvent.click(submitButton);

		modalCatchResult = screen.queryByTestId("modal-catch-result");
		expect(modalCatchResult).not.toBeInTheDocument();
	});

	test("on failed catch pokemon", async () => {
		const mockMath = Object.create(global.Math);
		mockMath.random = () => 0;
		global.Math = mockMath;

		const route = "/pokemons/ivysaur";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify([]));

		renderWithProviders(
			<MockedProvider mocks={successMocks} addTypename={false}>
				<Route exact path="/pokemons/:name">
					<PokemonDetail />
				</Route>
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		const loadingBackdropCatch = screen.queryByTestId(
			"loading-backdrop-catch"
		);
		expect(loadingBackdropCatch).not.toBeVisible();

		const catchButton = screen.queryByTestId("pokemon-detail-catch-button");
		fireEvent.click(catchButton);

		expect(loadingBackdropCatch).toBeVisible();

		let modalCatchResult = screen.queryByTestId("modal-catch-result");
		expect(modalCatchResult).not.toBeInTheDocument();

		await waitFor(() => {
			modalCatchResult = screen.queryByTestId("modal-catch-result");
			expect(modalCatchResult).toBeVisible();

			expect(loadingBackdropCatch).not.toBeVisible();
		});

		const modalCatchTitle = screen.queryByTestId("modal-catch-title");
		expect(modalCatchTitle).toHaveTextContent("Aw.. That's Bad :(");

		expect(localStorage.getItem("myPokemons")).toEqual(JSON.stringify([]));

		const modalCatchCloseButton = screen.getByTestId(
			"modal-catch-close-button"
		);
		fireEvent.click(modalCatchCloseButton);

		modalCatchResult = screen.queryByTestId("modal-catch-result");
		expect(modalCatchResult).not.toBeInTheDocument();
	});
});
