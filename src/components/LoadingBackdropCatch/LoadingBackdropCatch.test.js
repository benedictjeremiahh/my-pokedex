import { screen } from "@testing-library/react";
import { renderWithGlobalStyle } from "../../test.utils";
import LoadingBackdropCatch from "./LoadingBackdropCatch.component";

const props = {
	open: false,
};

describe("<LoadingBackdropCatch />", () => {
	test("renders without error", () => {
		renderWithGlobalStyle(<LoadingBackdropCatch {...props} />);
		const loadingBackdrop = screen.getByTestId("loading-backdrop-catch");
		expect(loadingBackdrop).toBeInTheDocument();
	});

	test("doesn't open when props open is false", () => {
		renderWithGlobalStyle(<LoadingBackdropCatch {...props} />);
		const loadingBackdrop = screen.getByTestId("loading-backdrop-catch");
		expect(loadingBackdrop).not.toBeVisible();
	});

	test("does open when props open is true", () => {
		renderWithGlobalStyle(<LoadingBackdropCatch {...props} open={true} />);
		const loadingBackdrop = screen.getByTestId("loading-backdrop-catch");
		expect(loadingBackdrop).toBeVisible();
	});
});
