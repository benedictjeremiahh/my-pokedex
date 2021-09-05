import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	container: theme.container,

	pokemonItem: {
		width: "38vw",
		padding: "12px",
		margin: "12px 0",
	},
	pokemonName: {
		color: "black",
		textTransform: "capitalize",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: "bold",
	},
	pokemonImage: {
		width: "100%",

		[theme.breakpoints.up("sm")]: {},
	},
	paginationContainer: {
		paddingTop: "24px",
		display: "flex",
		justifyContent: "center",
	},
}));
