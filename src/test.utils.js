import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./App.styles";

// render with router
export const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);

	return render(ui, { wrapper: BrowserRouter });
};

// render with global classes
const GlobalClassesWrapper = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const renderWithGlobalStyle = (ui) => {
	return render(ui, {
		wrapper: GlobalClassesWrapper,
	});
};

// render with dynamic width
const SizeWrapper = ({ children, width }) => {
	const theme = createTheme({
		props: { MuiWithWidth: { initialWidth: width } },
	});

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const renderWithWidth = (ui, width) => {
	return render(ui, {
		wrapper: (props) => <SizeWrapper width={width} {...props} />,
	});
};
