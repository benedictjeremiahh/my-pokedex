import { Route, Switch } from "react-router";
import { routes } from "./routes/routes";
import { Suspense } from "react";
import LoadingBackdrop from "./components/LoadingBackdrop/LoadingBackdrop.component";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation.component";
import Header from "./components/Header/Header.component";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./App.styles";
import NotFound from "./pages/NotFound/NotFound.component";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Header />
				<Suspense
					fallback={
						<LoadingBackdrop
							color="#D579C8"
							backgroundColor="white"
							open={true}
						/>
					}
				>
					<Switch>
						{routes.map((route, key) => (
							<Route
								path={route.path}
								key={key}
								exact
								component={route.component}
							/>
						))}
						<Route component={NotFound} />
					</Switch>
				</Suspense>
				<MobileNavigation />
			</div>
		</ThemeProvider>
	);
}

export default App;
