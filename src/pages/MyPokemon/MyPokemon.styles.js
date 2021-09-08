import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	...theme.globalClasses,
	emptyMessage: {
		textAlign: "center",
	},
}));
