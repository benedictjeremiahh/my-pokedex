import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { useStyles } from "./LoadingBackdropCatch.styles";
import PokemonLoadingGIF from "../../assets/gif/pokeball.gif";

const LoadingBackdropCatch = (props) => {
	const { open } = props;
	const classes = useStyles();
	return (
		<Backdrop className={classes.backdrop} open={open}>
			<img src={PokemonLoadingGIF} alt="Catch GIF" />
		</Backdrop>
	);
};

export default LoadingBackdropCatch;
