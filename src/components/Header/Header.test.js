import { render, screen } from "@testing-library/react";
import Header from "./Header.component";
import { MemoryRouter } from "react-router";
import { renderWithWidth } from "../../test.utils";

describe("<Header />", () => {
	test("renders without error", () => {
		render(<Header />);
		const header = screen.getByTestId("header");
		expect(header).toBeInTheDocument();
	});

	test("header-navigation on mobile/tablet (< md)", () => {
		renderWithWidth(
			<MemoryRouter initialEntries={["/"]}>
				<Header />
			</MemoryRouter>,
			"sm"
		);

		const headerNavigation = screen.queryByTestId("header-navigation");
		expect(headerNavigation).toBeNull();
	});

	test("header-navigation on desktop (> md)", () => {
		renderWithWidth(
			<MemoryRouter initialEntries={["/"]}>
				<Header />
			</MemoryRouter>,
			"md"
		);

		const headerNavigation = screen.queryByTestId("header-navigation");
		expect(headerNavigation).toBeInTheDocument();
	});
});
