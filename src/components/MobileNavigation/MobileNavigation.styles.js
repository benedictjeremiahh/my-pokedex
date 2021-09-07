import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	root: {
		width: "100vw",
		position: "fixed",
		bottom: 0,
		left: 0,
		zIndex: theme.zIndex.drawer + 2,

		backgroundImage: "linear-gradient(to bottom right, #D579C8, #FF1C1C)",
	},

	action: {
		color: "white !important",

		"&.Mui-selected": {
			color: "white !important",
			fontWeight: "bold",
		},
		"& .MuiBottomNavigationAction-label": {
			fontSize: "14px",
		},
	},
}));
