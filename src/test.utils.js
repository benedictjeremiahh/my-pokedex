import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { theme } from "./App.styles";
import PokemonProvider from "./providers/pokemon/pokemon.provider";

// render with router
export const renderWithRouter = (ui, { history }) => {
	return render(<Router history={history}>{ui}</Router>);
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

export const renderWithPokemonProvider = (ui, testingProps = {}) => {
	return render(ui, {
		wrapper: (props) => (
			<PokemonProvider {...props} testingProps={testingProps} />
		),
	});
};

export const renderWithRouterAndWidth = (ui, { history, width }) => {
	return render(
		<Router history={history}>
			<SizeWrapper width={width}>{ui}</SizeWrapper>
		</Router>
	);
};

export const renderWithRouterAndPokemonProvider = (
	ui,
	{ history, testingProps = {} }
) => {
	return render(
		<Router history={history}>
			<PokemonProvider testingProps={testingProps}>{ui}</PokemonProvider>
		</Router>
	);
};

export const renderWithProviders = (ui, { history, testingProps = {} }) => {
	return render(
		<ThemeProvider theme={theme}>
			<Router history={history}>
				<PokemonProvider testingProps={testingProps}>
					{ui}
				</PokemonProvider>
			</Router>
		</ThemeProvider>
	);
};
