import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import PokemonProvider from "./providers/pokemon/pokemon.provider";
import * as serviceWorker from "./serviceWorkerRegistration";

const client = new ApolloClient({
	uri: "https://graphql-pokeapi.vercel.app/api/graphql",
	cache: new InMemoryCache(),
});
const hist = createBrowserHistory();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter history={hist}>
			<ApolloProvider client={client}>
				<PokemonProvider>
					<App />
				</PokemonProvider>
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
reportWebVitals();
