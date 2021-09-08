import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound.component";

describe("<NotFound />", () => {
	beforeEach(() => {
		render(<NotFound />);
	});
	test("renders without error", () => {
		const errorMessage = screen.getByTestId("not-found");
		expect(errorMessage).toBeInTheDocument();
	});

	test("renders correct error text", () => {
		const errorMessageText = screen.getByTestId("not-found-text");
		expect(errorMessageText).toHaveTextContent(
			"404 Page Not Found"
		);
	});
});
