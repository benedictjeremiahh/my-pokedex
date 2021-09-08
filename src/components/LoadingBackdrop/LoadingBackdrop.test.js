import { render, screen } from "@testing-library/react";
import LoadingBackdrop from "./LoadingBackdrop.component";

const props = {
	open: false,
	color: "black",
	backgroundColor: "red",
};

describe("<LoadingBackdrop />", () => {
	test("renders without error", () => {
		render(<LoadingBackdrop {...props} />);
		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeInTheDocument();
	});

	test("renders with correct color and background color", () => {
		render(<LoadingBackdrop {...props} />);
		const loadingBackdrop = screen.getByTestId("loading-backdrop");

		expect(loadingBackdrop).toHaveStyle(`color : ${props.color}`);
		expect(loadingBackdrop).toHaveStyle(
			`background : ${props.backgroundColor}`
		);
	});

	test("doesn't open when props open is false", () => {
		render(<LoadingBackdrop {...props} />);
		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).not.toBeVisible();
	});

	test("does open when props open is true", () => {
		render(<LoadingBackdrop {...props} open={true} />);
		const loadingBackdrop = screen.getByTestId("loading-backdrop");
		expect(loadingBackdrop).toBeVisible();
	});
});
