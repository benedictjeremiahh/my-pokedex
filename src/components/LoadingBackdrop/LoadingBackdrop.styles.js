import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: ({ color }) => color || "#FFF",
		backgroundColor: ({ backgroundColor }) =>
			backgroundColor || "rgba(0, 0, 0, 0.5)",
	},
}));
