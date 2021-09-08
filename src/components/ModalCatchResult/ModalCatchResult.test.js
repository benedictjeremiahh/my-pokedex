import { render, screen, fireEvent } from "@testing-library/react";
import { renderWithPokemonProvider } from "../../test.utils";
import ModalCatchResult from "./ModalCatchResult.component";

const props = {
	open: false,
	isCatchSuccess: null,
	onClose: jest.fn(),
	pokemon: {
		id: 2,
		nickname: "ivysaur1",
	},
};

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

describe("<ModalCatchResult />", () => {
	test("renders without error", () => {
		render(
			<ModalCatchResult {...props} open={true} isCatchSuccess={true} />
		);
		const modalCatchResult = screen.getByTestId("modal-catch-result");
		expect(modalCatchResult).toBeInTheDocument();
	});

	test("returns null when props isCatchSuccess null", () => {
		render(<ModalCatchResult {...props} />);
		const modalCatchResult = screen.queryByTestId("modal-catch-result");
		expect(modalCatchResult).not.toBeInTheDocument();
	});

	test("isCatchSuccess true renders correct element", () => {
		render(
			<ModalCatchResult {...props} open={true} isCatchSuccess={true} />
		);

		const modalCatchTitle = screen.getByTestId("modal-catch-title");
		expect(modalCatchTitle).toHaveTextContent("Congratulations");

		const modalCatchSubtitle = screen.getByTestId("modal-catch-subtitle");
		expect(modalCatchSubtitle).toHaveTextContent(
			"You have captured a pokemon, now give it a nickname"
		);

		const modalCatchFormNickname = screen.getByTestId(
			"modal-catch-form-nickname"
		);
		expect(modalCatchFormNickname).toBeInTheDocument();
	});

	test("isCatchSuccess false renders correct element", () => {
		render(
			<ModalCatchResult {...props} open={true} isCatchSuccess={false} />
		);

		const modalCatchTitle = screen.getByTestId("modal-catch-title");
		expect(modalCatchTitle).toHaveTextContent("Aw.. That's Bad :(");

		const modalCatchSubtitle = screen.getByTestId("modal-catch-subtitle");
		expect(modalCatchSubtitle).toHaveTextContent(
			"You haven't successfully capture the pokemon. Don't be sad fellas, Let's try again!"
		);

		const modalCatchCloseButton = screen.getByTestId(
			"modal-catch-close-button"
		);
		expect(modalCatchCloseButton).toBeInTheDocument();
	});

	test("close modal if isCatchSuccess is false", () => {
		render(
			<ModalCatchResult {...props} open={true} isCatchSuccess={false} />
		);
		const closeButton = screen.getByTestId("modal-catch-close-button");
		fireEvent.click(closeButton);
		expect(props.onClose).toBeCalledTimes(1);

		const modalCatchResult = screen.getByTestId("modal-catch-result");
		expect(modalCatchResult).toBeInTheDocument();
	});

	test("set nickname to empty nickname renders error helper text", () => {
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));
		renderWithPokemonProvider(
			<ModalCatchResult {...props} open={true} isCatchSuccess={true} />
		);

		const nicknameInput = screen.getByTestId("modal-catch-nickname-input");
		fireEvent.change(nicknameInput, { target: { value: "" } });

		const submitButton = screen.getByTestId("modal-catch-submit-button");
		fireEvent.click(submitButton);

		const helperText = screen.getByTestId(
			"modal-catch-nickname-helper-text"
		);
		expect(helperText).toHaveTextContent("Nickname cannot be empty");
	});

	test("change nickname removes error helper text", () => {
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));
		renderWithPokemonProvider(
			<ModalCatchResult {...props} open={true} isCatchSuccess={true} />
		);

		const nicknameInput = screen.getByTestId("modal-catch-nickname-input");
		fireEvent.change(nicknameInput, { target: { value: "" } });

		const submitButton = screen.getByTestId("modal-catch-submit-button");
		fireEvent.click(submitButton);

		fireEvent.change(nicknameInput, {
			target: { value: "ivysaur changed" },
		});
		const helperText = screen.queryByTestId(
			"modal-catch-nickname-helper-text"
		);
		expect(helperText).not.toBeInTheDocument();
	});

	test("set nickname to already existed nickname renders error helper text", () => {
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));
		renderWithPokemonProvider(
			<ModalCatchResult {...props} open={true} isCatchSuccess={true} />
		);

		const nicknameInput = screen.getByTestId("modal-catch-nickname-input");
		fireEvent.change(nicknameInput, { target: { value: "ivysaur" } });

		const submitButton = screen.getByTestId("modal-catch-submit-button");
		fireEvent.click(submitButton);

		const helperText = screen.getByTestId(
			"modal-catch-nickname-helper-text"
		);
		expect(helperText).toHaveTextContent(
			"This nickname is already been taken, please choose another nickname"
		);
	});

	test("set different nickname updates localStorage", () => {
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));
		renderWithPokemonProvider(
			<ModalCatchResult {...props} open={true} isCatchSuccess={true} />
		);

		const modalCatchResult = screen.getByTestId("modal-catch-result");
		expect(modalCatchResult).toBeInTheDocument();

		const nicknameInput = screen.getByTestId("modal-catch-nickname-input");
		fireEvent.change(nicknameInput, { target: { value: "ivysaur new" } });

		const submitButton = screen.getByTestId("modal-catch-submit-button");
		fireEvent.click(submitButton);

		const helperText = screen.queryByTestId(
			"modal-catch-nickname-helper-text"
		);
		expect(helperText).not.toBeInTheDocument();

		expect(props.onClose).toBeCalledTimes(1);
		const updatedLS = [
			{
				id: 1,
				name: "ivysaur",
				nickname: "ivysaur",
			},
			{
				id: 2,
				name: "ivysaur",
				nickname: "ivysaur new",
			},
		];
		expect(localStorage.getItem("myPokemons")).toEqual(
			JSON.stringify(updatedLS)
		);
	});

	test("unchanged nickname do not invoke editPokemon", () => {
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));
		const testingProps = { editPokemon: jest.fn() };

		renderWithPokemonProvider(
			<ModalCatchResult {...props} open={true} isCatchSuccess={true} />,
			testingProps
		);

		const submitButton = screen.getByTestId("modal-catch-submit-button");
		fireEvent.click(submitButton);

		expect(testingProps.editPokemon).toBeCalledTimes(0);
	});

	test("different nickname invokes editPokemon", () => {
		localStorage.setItem("myPokemons", JSON.stringify(mockLS));
		const testingProps = { editPokemon: jest.fn() };

		renderWithPokemonProvider(
			<ModalCatchResult {...props} open={true} isCatchSuccess={true} />,
			testingProps
		);

		const nicknameInput = screen.getByTestId("modal-catch-nickname-input");
		fireEvent.change(nicknameInput, { target: { value: "ivysaur new" } });

		const submitButton = screen.getByTestId("modal-catch-submit-button");
		fireEvent.click(submitButton);

		expect(testingProps.editPokemon).toBeCalledTimes(1);
	});

	test("nickname is set when pokemon props is a pokemon object", () => {
		const { rerender } = render(
			<ModalCatchResult
				{...props}
				pokemon={null}
				open={true}
				isCatchSuccess={true}
			/>
		);
		const nicknameInput = screen.getByTestId("modal-catch-nickname-input");
		expect(nicknameInput).toHaveValue("");
		rerender(
			<ModalCatchResult {...props} open={true} isCatchSuccess={true} />
		);
		expect(nicknameInput.value).toBe(props.pokemon.nickname);
	});
});
