import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { useStyles } from "./LoadingBackdropCatch.styles";
import Pokeball from "../../assets/img/pokeball.png";

const LoadingBackdropCatch = (props) => {
	const { open } = props;
	const classes = useStyles();
	return (
		<Backdrop
			className={classes.backdrop}
			open={open}
			data-testid="loading-backdrop-catch"
		>
			<img src={Pokeball} alt="Pokeball" />
		</Backdrop>
	);
};

export default LoadingBackdropCatch;
