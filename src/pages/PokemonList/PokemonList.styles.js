import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	container: {
		padding: "24px 12px 56px 12px",
	},
	title: {
		textAlign: "center",
		fontSize: "24px",
	},
	pokemonItem: {
		width: "80vw",
		padding: "12px",
		margin: "12px 0",
	},
	pokemonName: {
		textTransform: "capitalize",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: "bold",
	},
	pokemonImage: {
		width: "80px",
		height: "80px",

		[theme.breakpoints.up("sm")]: {
			width: "120px",
			height: "120px",
		},
	},
	paginationContainer: {
		padding: "24px 0",
		display: "flex",
		justifyContent: "center",
	},
}));
