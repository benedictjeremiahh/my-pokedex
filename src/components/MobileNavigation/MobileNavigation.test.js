import { screen, fireEvent } from "@testing-library/react";
import { renderWithRouterAndWidth } from "../../test.utils";
import MobileNavigation from "./MobileNavigation.component";
import { createMemoryHistory } from "history";

describe("<MobileNavigation />", () => {
	test("renders without error", () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });
		const width = "sm";
		renderWithRouterAndWidth(<MobileNavigation />, { history, width });
		const mobileNavigation = screen.getByTestId("mobile-navigation");
		expect(mobileNavigation).toBeInTheDocument();
	});

	test("route / activated correct element", () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });
		const width = "sm";
		renderWithRouterAndWidth(<MobileNavigation />, { history, width });
		const pokemonList = screen.getByTestId("pokemon-list-navigation");
		expect(pokemonList).toHaveClass("Mui-selected");
	});

	test("route /my-pokemon activated correct element", () => {
		const route = "/my-pokemon";
		const history = createMemoryHistory({ initialEntries: [route] });
		const width = "sm";
		renderWithRouterAndWidth(<MobileNavigation />, { history, width });
		const myPokemon = screen.getByTestId("my-pokemon-navigation");
		expect(myPokemon).toHaveClass("Mui-selected");
	});

	test("trigger on change event", () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });
		const width = "sm";
		renderWithRouterAndWidth(<MobileNavigation />, { history, width });

		const myPokemon = screen.getByTestId("my-pokemon-navigation");
		fireEvent.click(myPokemon);
		expect(myPokemon).toHaveClass("Mui-selected");
		expect(history.location.pathname).toEqual("/my-pokemon");
	});

	test("renders mobile navigation on md down", () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });
		const width = "sm";
		renderWithRouterAndWidth(<MobileNavigation />, {
			history,
			width,
		});

		const mobileNavigation = screen.queryByTestId("mobile-navigation");
		expect(mobileNavigation).toBeInTheDocument();
	});

	test("don't renders mobile navigation on md up", () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });
		const width = "lg";
		renderWithRouterAndWidth(<MobileNavigation />, {
			history,
			width,
		});

		const mobileNavigation = screen.queryByTestId("mobile-navigation");
		expect(mobileNavigation).not.toBeInTheDocument();
	});
});
