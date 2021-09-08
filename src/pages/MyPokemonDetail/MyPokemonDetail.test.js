import { screen, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { GET_POKEMON_BY_NAME } from "../../graphql/queries/PokemonDetail.queries";
import { renderWithRouterAndPokemonProvider } from "../../test.utils";
import { MockedProvider } from "@apollo/client/testing";
import MyPokemonDetail from "./MyPokemonDetail.component";
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
		name: "ivysaur",
		nickname: "ivysaur",
	},
	{
		id: 2,
		name: "ivysaur",
		nickname: "ivysaur1",
	},
];

describe("<MyPokemonDetail />", () => {
	test("renders my pokemon detail page without error", async () => {
		const route = "/my-pokemon/ivysaur1";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));

		renderWithRouterAndPokemonProvider(
			<MockedProvider mocks={successMocks} addTypename={false}>
				<Route exact path="/my-pokemon/:nickname">
					<MyPokemonDetail />
				</Route>
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		const pokemonInformationNickname = screen.getByTestId(
			"pokemon-information-nickname"
		);
		expect(pokemonInformationNickname).toHaveTextContent("ivysaur1");

		const pokemonInformationName = screen.getByTestId(
			"pokemon-information-name"
		);
		expect(pokemonInformationName).toHaveTextContent("ivysaur");
	});

	test("fail call to graphql renders error message", async () => {
		const route = "/my-pokemon/ivysaur1";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));

		renderWithRouterAndPokemonProvider(
			<MockedProvider mocks={failMocks} addTypename={false}>
				<Route exact path="/my-pokemon/:nickname">
					<MyPokemonDetail />
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

	test("on pokemon released", async () => {
		const route = "/my-pokemon/ivysaur1";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));

		renderWithRouterAndPokemonProvider(
			<MockedProvider mocks={successMocks} addTypename={false}>
				<Route exact path="/my-pokemon/:nickname">
					<MyPokemonDetail />
				</Route>
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		let modalReleaseConfirmation = screen.queryByTestId(
			"modal-release-confirmation"
		);
		expect(modalReleaseConfirmation).not.toBeInTheDocument();

		const releaseButton = screen.queryByTestId("my-pokemon-release-button");
		fireEvent.click(releaseButton);

		modalReleaseConfirmation = screen.queryByTestId(
			"modal-release-confirmation"
		);
		expect(modalReleaseConfirmation).toBeInTheDocument();

		const yesConfirmButton = screen.queryByTestId(
			"modal-release-confirmation-yes-confirm"
		);
		fireEvent.click(yesConfirmButton);

		const updatedLS = [
			{
				id: 1,
				name: "ivysaur",
				nickname: "ivysaur",
			},
		];
		expect(localStorage.getItem("myPokemons")).toEqual(
			JSON.stringify(updatedLS)
		);
		expect(history.location.pathname).toEqual("/my-pokemon");
	});

	test("on cancel pokemon release", async () => {
		const route = "/my-pokemon/ivysaur1";
		const history = createMemoryHistory({ initialEntries: [route] });
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));

		renderWithRouterAndPokemonProvider(
			<MockedProvider mocks={successMocks} addTypename={false}>
				<Route exact path="/my-pokemon/:nickname">
					<MyPokemonDetail />
				</Route>
			</MockedProvider>,
			{ history }
		);

		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();

		await waitFor(() => {
			expect(loadingBackdrop).not.toBeVisible();
		});

		let modalReleaseConfirmation = screen.queryByTestId(
			"modal-release-confirmation"
		);
		expect(modalReleaseConfirmation).not.toBeInTheDocument();

		const releaseButton = screen.queryByTestId("my-pokemon-release-button");
		fireEvent.click(releaseButton);

		modalReleaseConfirmation = screen.queryByTestId(
			"modal-release-confirmation"
		);
		expect(modalReleaseConfirmation).toBeInTheDocument();

		const noConfirmButton = screen.queryByTestId(
			"modal-release-confirmation-no-confirm"
		);
		fireEvent.click(noConfirmButton);

		expect(localStorage.getItem("myPokemons")).toEqual(
			JSON.stringify(mockLS)
		);
		expect(history.location.pathname).toEqual(route);
	});
});
