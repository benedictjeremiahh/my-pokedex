import { Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "./NotFound.styles";
import Error from "../../assets/img/error.png";

const NotFound = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.container} data-testid="not-found">
			<Grid item xs={12} className={classes.errorPictureContainer}>
				<img src={Error} alt="Error" data-testid="error-image" />
			</Grid>
			<Grid
				item
				xs={12}
				className={classes.errorMessageContainer}
				data-testid="not-found-text"
			>
				404 Page Not Found
			</Grid>
		</Grid>
	);
};

export default NotFound;
