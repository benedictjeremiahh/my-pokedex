import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage.component";

describe("<ErrorMessage />", () => {
	beforeEach(() => {
		render(<ErrorMessage />);
	});
	test("renders without error", () => {
		const errorMessage = screen.getByTestId("error-message");
		expect(errorMessage).toBeInTheDocument();
	});

	test("renders correct error text", () => {
		const errorMessageText = screen.getByTestId("error-message-text");
		expect(errorMessageText).toHaveTextContent(
			"Oops... Something happened, please try again..."
		);
	});
});
