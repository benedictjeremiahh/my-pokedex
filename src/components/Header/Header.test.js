import { render, screen } from "@testing-library/react";
import Header from "./Header.component";
import { renderWithRouterAndWidth } from "../../test.utils";
import { createMemoryHistory } from "history";

describe("<Header />", () => {
	test("renders without error", () => {
		render(<Header />);
		const header = screen.getByTestId("header");
		expect(header).toBeInTheDocument();
	});

	test("header-navigation on mobile/tablet (< md)", () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });
		const width = "sm";
		renderWithRouterAndWidth(<Header />, { history, width });

		const headerNavigation = screen.queryByTestId("header-navigation");
		expect(headerNavigation).toBeNull();
	});

	test("header-navigation on desktop (> md)", () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });
		const width = "md";
		renderWithRouterAndWidth(<Header />, { history, width });

		const headerNavigation = screen.queryByTestId("header-navigation");
		expect(headerNavigation).toBeInTheDocument();
	});

	test("route / activated right element", () => {
		const route = "/";
		const history = createMemoryHistory({ initialEntries: [route] });
		const width = "md";
		renderWithRouterAndWidth(<Header />, { history, width });

		const pokemonListNavLink = screen.getByTestId(
			"pokemon-list-header-navigation"
		);
		expect(pokemonListNavLink).toHaveStyle("font-weight : bold");
	});

	test("route /my-pokemon activated right element", () => {
		const route = "/my-pokemon";
		const history = createMemoryHistory({ initialEntries: [route] });
		const width = "md";
		renderWithRouterAndWidth(<Header />, { history, width });

		const myPokemonNavLink = screen.getByTestId(
			"my-pokemon-header-navigation"
		);
		expect(myPokemonNavLink).toHaveStyle("font-weight : bold");
	});
});
