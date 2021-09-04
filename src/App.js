import "./App.css";
import { Route, Switch } from "react-router";
import { routes } from "./routes/routes";
import { Suspense } from "react";
import LoadingBackdrop from "./components/LoadingBackdrop/LoadingBackdrop.component";
import Navigation from "./components/Navigation/Navigation.component";
import Header from "./components/Header/Header.component";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content">
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
					</Switch>
				</Suspense>
			</div>
			<Navigation />
		</div>
	);
}

export default App;
