import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	...theme.globalClasses,
	errorPictureContainer: {
		display: "flex",
		justifyContent: "center",

		"& img": {
			width: "80vw",

			[theme.breakpoints.up("md")]: {
				width: "20vw",
			},
		},
	},
	errorMessageContainer: {
		textAlign: "center",
		marginTop: "12px",
		fontWeight: "bold",
	},
}));
