import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage.component";

const resizeWindow = (x, y) => {
	window.innerWidth = x;
	window.innerHeight = y;
	window.dispatchEvent(new Event("resize"));
};

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
