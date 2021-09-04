import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
	root: {
		width: "100vw",
		position: "fixed",
		bottom: 0,
		left: 0,
		zIndex: 1202,

		backgroundImage: "linear-gradient(to bottom right, #D579C8, #F36471)",
	},

	action: {
		color: "white",

		"&.Mui-selected": {
			color: "white",
			fontWeight: "bold",
		},
		"& .MuiBottomNavigationAction-label": {
			fontSize: "12px",
		},
	},
});
