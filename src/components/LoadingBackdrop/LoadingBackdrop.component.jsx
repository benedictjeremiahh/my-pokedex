import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./LoadingBackdrop.styles";

const LoadingBackdrop = (props) => {
	const { open, color, backgroundColor } = props;
	const classes = useStyles({
		color,
		backgroundColor,
	});
	return (
		<Backdrop className={classes.backdrop} open={open}>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
};

export default LoadingBackdrop;
