import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	...theme.globalClasses,
	catchButtonContainer: {
		display: "flex",
		justifyContent: "center",
	},
	catchButton: {
		color: "white",
		padding: "12px 46px",
		fontSize: "16px",

		"& img": {
			width: "18px",
			marginLeft: "12px",
		},
		"&:hover": {
			fontWeight: "bold",
			"& img": {
				animation: `$pokeballRotation 2000ms infinite`,
			},
		},
	},
}));
