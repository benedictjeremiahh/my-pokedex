import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	...theme.globalClasses,
	backdrop: {
		zIndex: theme.zIndex.drawer + 2,
		display: "flex",
		alignItems: "center",
		backgroundColor: "#FF1C1C",

		"& img": {
			animation: `$pokeballRotation 2000ms infinite`,
		},
	},
}));
