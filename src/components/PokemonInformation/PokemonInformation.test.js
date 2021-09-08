import { render, screen, fireEvent } from "@testing-library/react";
import { roundToTwoDigitsAfterComma } from "../../helpers/General.helper";
import PokemonInformation from "./PokemonInformation.component";

const pokemonTypeWithColor = [
	{
		name: "normal",
		backgroundColor: "#AAAA99",
	},
	{
		name: "fire",
		backgroundColor: "#FF4422",
	},
	{
		name: "water",
		backgroundColor: "#3399FF",
	},
	{
		name: "electric",
		backgroundColor: "#FFCC33",
	},
	{
		name: "grass",
		backgroundColor: "#77CC55",
	},
	{
		name: "ice",
		backgroundColor: "#66CCFF",
	},
	{
		name: "fighting",
		backgroundColor: "#BB5544",
	},
	{
		name: "poison",
		backgroundColor: "#AA5599",
	},
	{
		name: "ground",
		backgroundColor: "#DDBB55",
	},
	{
		name: "flying",
		backgroundColor: "#8899FF",
	},
	{
		name: "psychic",
		backgroundColor: "#FF5599",
	},
	{
		name: "bug",
		backgroundColor: "#AABB22",
	},
	{
		name: "rock",
		backgroundColor: "#BBAA66",
	},
	{
		name: "ghost",
		backgroundColor: "#6666BB",
	},
	{
		name: "dragon",
		backgroundColor: "#6666BB",
	},
	{
		name: "steel",
		backgroundColor: "#AAAABB",
	},
	{
		name: "fairy",
		backgroundColor: "#EE99EE",
	},
];

const movesMoreThanFive = [
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
	{
		move: {
			name: "bind",
		},
	},
	{
		move: {
			name: "vine-whip",
		},
	},
	{
		move: {
			name: "headbutt",
		},
	},
	{
		move: {
			name: "tackle",
		},
	},
];

const fiveMoves = [
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
	{
		move: {
			name: "bind",
		},
	},
	{
		move: {
			name: "vine-whip",
		},
	},
	{
		move: {
			name: "headbutt",
		},
	},
];

const props = {
	pokemon: {
		name: "ivysaur",
		sprites: {
			front_default:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
		},
		types: pokemonTypeWithColor.map((pokemonType) => ({
			type: {
				name: pokemonType.name,
			},
		})),
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
		moves: movesMoreThanFive,
		height: 10,
		weight: 130,
	},
	nickname: "ivysaur1",
};

describe("<PokemonInformation />", () => {
	test("renders without error", () => {
		render(<PokemonInformation {...props} />);

		const image = screen.getByTestId("pokemon-information-image");
		expect(image).toHaveAttribute(
			"src",
			props.pokemon.sprites.front_default
		);

		const nickname = screen.getByTestId("pokemon-information-nickname");
		expect(nickname).toHaveTextContent(props.nickname);

		const name = screen.getByTestId("pokemon-information-name");
		expect(name).toHaveTextContent(props.pokemon.name);

		const height = screen.getByTestId("pokemon-information-height");
		expect(height).toHaveTextContent(
			`${roundToTwoDigitsAfterComma(props.pokemon.height / 10)} m`
		);

		const weight = screen.getByTestId("pokemon-information-weight");
		expect(weight).toHaveTextContent(
			`${roundToTwoDigitsAfterComma(props.pokemon.weight / 10)} kg`
		);

		const abilities = screen.queryAllByTestId(
			"pokemon-information-ability"
		);
		expect(abilities.length).toBe(props.pokemon.abilities.length);

		const moves = screen.queryAllByTestId("pokemon-information-move");
		expect(moves.length).toBe(5); // first rendered is 5 moves only

		const loadHideButton = screen.getByTestId(
			"pokemon-information-load-hide-moves-button"
		);
		expect(loadHideButton).toBeInTheDocument();
	});

	test("render correct background color class", () => {
		render(<PokemonInformation {...props} nickname={null} />);
		for (let i = 0; i < pokemonTypeWithColor.length; i++) {
			const pokemonType = pokemonTypeWithColor[i];

			const chipType = screen.getByTestId(
				`pokemon-information-${pokemonType.name}`
			);
			expect(chipType).toHaveClass(pokemonType.name);
		}
	});

	test("doesn't render nickname if no nickname props given", () => {
		render(<PokemonInformation {...props} nickname={null} />);

		const nickname = screen.queryByTestId("pokemon-information-nickname");
		expect(nickname).not.toBeInTheDocument();
	});

	test("doesn't render ol if no abilities props given", () => {
		render(
			<PokemonInformation
				{...props}
				pokemon={{ ...props.pokemon, abilities: [] }}
			/>
		);

		const abilitiesContainer = screen.queryByTestId(
			"pokemon-information-abilities"
		);
		expect(abilitiesContainer).toHaveTextContent("-");
	});

	test("doesn't render ol if no moves props given", () => {
		render(
			<PokemonInformation
				{...props}
				pokemon={{ ...props.pokemon, moves: [] }}
			/>
		);

		const movesContainer = screen.queryByTestId(
			"pokemon-information-moves"
		);
		expect(movesContainer).toHaveTextContent("-");
	});

	test("renders hidden abbility if ability is_hidden is true", () => {
		render(<PokemonInformation {...props} />);

		const hiddenAbbilityCount = props.pokemon.abilities.filter(
			(ability) => ability.is_hidden
		).length;

		const hiddenAbilites = screen.queryAllByTestId(
			"pokemon-information-hidden-ability"
		);

		expect(hiddenAbilites.length).toBe(hiddenAbbilityCount);
	});

	test("doesn't render span button if moves props length is below equal 5", () => {
		render(
			<PokemonInformation
				{...props}
				pokemon={{ ...props.pokemon, moves: fiveMoves }}
			/>
		);

		const loadHideButton = screen.queryByTestId(
			"pokemon-information-load-hide-moves-button"
		);
		expect(loadHideButton).not.toBeInTheDocument();
	});

	test("load all moves when load hide moves button clicked", () => {
		render(<PokemonInformation {...props} />);

		const loadHideButton = screen.getByTestId(
			"pokemon-information-load-hide-moves-button"
		);
		fireEvent.click(loadHideButton);

		const moves = screen.queryAllByTestId("pokemon-information-move");
		expect(moves.length).toBe(props.pokemon.moves.length);
	});
});
