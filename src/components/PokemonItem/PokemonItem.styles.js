import { makeStyles } from "@material-ui/core";

const paddingContainer = "12px";

export const useStyles = makeStyles((theme) => ({
	...theme.globalClasses,
	itemContainer: {
		boxShadow: theme.shadows[5],
		borderRadius: "8px",
		margin: paddingContainer,
		padding: paddingContainer,

		minHeight: ({ isMyPokemon }) => (isMyPokemon ? "240px" : "none"),
	},
	pokemonNickname: {
		color: "grey",
		textTransform: "capitalize",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: "6px",
	},
	pokemonName: {
		color: "black",
		textTransform: "capitalize",
		display: "flex",
		alignItems: "center",
		textAlign: "center",
		justifyContent: "center",
		fontWeight: "bold",
	},
	ownedCount: {
		color: "grey",
		textTransform: "capitalize",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "6px",
	},
	pokemonImageContainer: {
		display: "flex",
		justifyContent: "center",

		"& img": {
			width: ({ isMyPokemon }) => (isMyPokemon ? "55%" : "100%"),

			[theme.breakpoints.up("sm")]: {},
		},
		marginBottom: "6px",
	},
	releaseButtonContainer: {
		marginTop: "12px",
		display: "flex",
		justifyContent: "center",
		alignContent: "flex-end",
	},
	releaseButton: {
		zIndex : 2,
		width: "100%",
		borderRadius: "8px",
		fontWeight: "bold",
		color: "white",

		"& img": {
			width: "18px",
			marginLeft: "12px",
		},
	},
}));
