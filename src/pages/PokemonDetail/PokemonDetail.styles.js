import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	...theme.globalClasses,
	catchButtonContainer: {
		display: "flex",
		justifyContent: "center",
	},
	catchButton: {
		fontWeight: "bold",
		color: "white",
		paddingLeft: "24px",
		paddingRight: "24px",

		"& img": {
			width: "18px",
			marginLeft: "12px",
		},
	},
}));
