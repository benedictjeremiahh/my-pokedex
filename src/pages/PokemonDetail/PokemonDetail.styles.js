import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	container: theme.container,
	title: {
		textAlign: "center",
		fontSize: "24px",
	},
	pokemonItem: {
		width: "80vw",
		padding: "12px",
		margin: "12px 0",
	},
	pokemonDetail: {
		padding: "0 12px",
	},
	pokemonImage: {
		width: "100%",

		[theme.breakpoints.up("sm")]: {
			width: "100%",
		},
	},
	paginationContainer: {
		padding: "24px 0",
		display: "flex",
		justifyContent: "center",
	},
	chipType: {
		margin: "0 6px",
		fontWeight: "bold",
		textTransform: "uppercase",
		color: "white",

		...theme.typeColors,
	},
	horizontalDivider: {
		width: "100%",
		margin: "10px 0",

		"&:first-of-type": {
			marginTop: "18px",
		},
		"&:last-of-type": {
			marginBottom: "18px",
		},
	},
	label: {
		color: "gray",
	},
	capitalized: {
		textTransform: "capitalize",
	},
	orderedList: {
		listStylePosition: "inside",
		paddingLeft: "0",

		"& li": {
			margin: "5px 0",
		},
	},
	hiddenAbbility: {
		color: "gray",
	},
	loadAllButton: {
		textDecoration: "underline",
		cursor: "pointer",
	},
	catchButtonContainer: {
		display: "flex",
		justifyContent: "center",
	},
	catchButton: {
		backgroundColor: "#FF1C1C !important",
		fontWeight: "bold",
		color: "white",
		paddingLeft: "24px",
		paddingRight: "24px",

		"& img": {
			width: "18px",
			marginRight: "12px",
		},
	},
}));
