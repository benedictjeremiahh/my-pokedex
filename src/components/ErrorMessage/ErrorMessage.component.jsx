import { Grid } from "@material-ui/core";
import React from "react";
import Error from "../../assets/img/error.png";
import { useStyles } from "./ErrorMessage.styles";

const ErrorMessage = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			className={classes.container}
			data-testid="error-message"
		>
			<Grid item xs={12} className={classes.errorPictureContainer}>
				<img src={Error} alt="Error" data-testid="error-image" />
			</Grid>
			<Grid
				item
				xs={12}
				className={classes.errorMessageContainer}
				data-testid="error-message-text"
			>
				Oops... Something happened, please try again...
			</Grid>
		</Grid>
	);
};

export default ErrorMessage;
