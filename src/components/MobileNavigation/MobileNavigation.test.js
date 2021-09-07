import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../test.utils";
import MobileNavigation from "./MobileNavigation.component";

describe("<LoadingBackdropCatch />", () => {
	test("renders without error", () => {
		renderWithRouter(<MobileNavigation />);
		const mobileNavigation = screen.getByTestId("mobile-navigation");
		expect(mobileNavigation).toBeInTheDocument();
	});
});
