import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	...theme.globalClasses,
	errorPictureContainer: {
		display: "flex",
		justifyContent: "center",

		"& img": {
			width: "60vw",

			[theme.breakpoints.up("md")]: {
				width: "20vw",
			},
		},
	},
	errorMessageContainer: {
		marginTop: "24px",
		textAlign: "center",
		fontSize: "28px",
		fontWeight: "bold",
	},
}));
