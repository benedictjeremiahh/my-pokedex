import { screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import App from "./App";
import { renderWithRouter, renderWithRouterAndWidth } from "./test.utils";

describe("<App />", () => {
	test("renders not found page if route is not exist", async () => {
		const route = "/asdhasd";
		const history = createMemoryHistory({ initialEntries: [route] });

		renderWithRouter(<App />, { history });

		const notFoundPage = screen.queryByTestId("not-found");
		expect(notFoundPage).toBeInTheDocument();
	});
});
