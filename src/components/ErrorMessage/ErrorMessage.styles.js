import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	...theme.globalClasses,
	errorPictureContainer: {
		display: "flex",
		justifyContent: "center",

		"& img": {
			width: "80vw",
		},
	},
	errorMessageContainer: {
		marginTop: "12px",
		fontWeight: "bold",
	},
}));
