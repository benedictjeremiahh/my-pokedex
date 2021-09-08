import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouter } from "../../test.utils";
import PokemonItem from "./PokemonItem.component";
import { createMemoryHistory } from "history";

const propsPokemonList = {
	name: "ivysaur",
	image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
	ownedCount: 2,
	// my pokemon list
	isMyPokemon: null,
	nickname: null,
	onReleaseClick: jest.fn(),
};

const propsMyPokemonList = {
	name: "ivysaur",
	image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
	ownedCount: null,
	// my pokemon list
	isMyPokemon: true,
	nickname: "ivysaur1",
	onReleaseClick: jest.fn(),
};

describe("<PokemonItem />", () => {
	test("renders pokemon item for pokemon list without error", () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });
		renderWithRouter(<PokemonItem {...propsPokemonList} />, {
			history,
		});

		const itemLink = screen.getByTestId("pokemon-item-link");
		expect(itemLink).toBeInTheDocument();
		expect(itemLink).toHaveAttribute(
			"href",
			`/pokemons/${propsPokemonList.name}`
		);

		const image = screen.getByTestId("pokemon-item-image");
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("src", propsPokemonList.image);

		const name = screen.getByTestId("pokemon-item-name");
		expect(name).toBeInTheDocument();
		expect(name).toHaveTextContent(propsPokemonList.name);

		const ownedCount = screen.queryByTestId("pokemon-item-owned-count");
		expect(ownedCount).toBeInTheDocument();
		expect(ownedCount).toHaveTextContent(propsPokemonList.ownedCount);

		// MyPokemonItem elements
		const nickname = screen.queryByTestId("pokemon-item-nickname");
		expect(nickname).not.toBeInTheDocument();

		const releaseButton = screen.queryByTestId(
			"pokemon-item-release-button"
		);
		expect(releaseButton).not.toBeInTheDocument();
	});

	test("renders pokemon item for my pokemon list without error", () => {
		const route = "/my-pokemon";
		const history = createMemoryHistory({ initialEntries: [route] });
		renderWithRouter(<PokemonItem {...propsMyPokemonList} />, {
			history,
		});

		const itemLink = screen.getByTestId("pokemon-item-link");
		expect(itemLink).toBeInTheDocument();
		expect(itemLink).toHaveAttribute(
			"href",
			`/my-pokemon/${propsMyPokemonList.nickname}`
		);

		const image = screen.getByTestId("pokemon-item-image");
		expect(image).toBeInTheDocument();
		expect(image).toHaveAttribute("src", propsMyPokemonList.image);

		const name = screen.getByTestId("pokemon-item-name");
		expect(name).toBeInTheDocument();
		expect(name).toHaveTextContent(propsMyPokemonList.name);

		const ownedCount = screen.queryByTestId("pokemon-item-owned-count");
		expect(ownedCount).not.toBeInTheDocument();

		// MyPokemonItem elements
		const nickname = screen.queryByTestId("pokemon-item-nickname");
		expect(nickname).toBeInTheDocument();
		expect(nickname).toHaveTextContent(propsMyPokemonList.nickname);

		const releaseButton = screen.queryByTestId(
			"pokemon-item-release-button"
		);
		expect(releaseButton).toBeInTheDocument();
	});

	test("doesn't redirect if release button clicked", () => {
		const route = "/my-pokemon";
		const history = createMemoryHistory({ initialEntries: [route] });
		renderWithRouter(<PokemonItem {...propsMyPokemonList} />, {
			history,
		});

		const releaseButton = screen.queryByTestId(
			"pokemon-item-release-button"
		);
		fireEvent.click(releaseButton);
		expect(history.location.pathname).toBe(route);

		expect(propsMyPokemonList.onReleaseClick).toBeCalledTimes(1);
	});

	test("redirect if other than release button clicked", () => {
		const route = "/my-pokemon";
		const history = createMemoryHistory({ initialEntries: [route] });
		renderWithRouter(<PokemonItem {...propsMyPokemonList} />, {
			history,
		});

		const itemLink = screen.queryByTestId("pokemon-item-link");
		fireEvent.click(itemLink);
		expect(history.location.pathname).toBe(
			`/my-pokemon/${propsMyPokemonList.nickname}`
		);
	});
});
