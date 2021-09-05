import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	content: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: "24px 18px",
		margin: "0 24px",
		borderRadius: "8px",
		outline: "none",
	},
	modalTitle: {
		textAlign: "center",
		fontSize: "24px",
		fontWeight: "bold",

		"& img": {
			width: "20px",
			marginLeft: "8px",
		},
	},
	modalSubTitle: {
		textAlign: "center",
		fontSize: "18px",
		marginTop: "18px",
		lineHeight : '24px'
	},
	nicknameInputContainer: {
		marginTop: "12px",
	},
	buttonContainer: {
		marginTop: "20px",
		display: "flex",
		justifyContent: "center",
	},
	submitButton: {
		backgroundColor: "#28A745 !important",
		color: "white",
		paddingLeft: "24px",
		paddingRight: "24px",
	},
	closeButton: {
		backgroundColor: "#DC3545 !important",
		color: "white",
		paddingLeft: "24px",
		paddingRight: "24px",
	},
}));
