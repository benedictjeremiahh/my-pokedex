import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 2,

		"& img": {
			position: "fixed",
			top: 0,
		},
	},
}));
