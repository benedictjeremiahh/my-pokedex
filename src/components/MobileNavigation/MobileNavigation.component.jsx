import {
	BottomNavigation,
	BottomNavigationAction,
	Hidden,
} from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStyles } from "./MobileNavigation.styles";

const MobileNavigation = () => {
	const location = useLocation();
	const [value, setValue] = React.useState(location.pathname);
	const classes = useStyles();

	return (
		<Hidden mdUp>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels
				className={classes.root}
				data-testid="mobile-navigation"
			>
				<BottomNavigationAction
					component={Link}
					to="/"
					value="/"
					className={classes.action}
					label="Pokemon List"
					icon={null}
					data-testid="pokemon-list-navigation"
				/>
				<BottomNavigationAction
					component={Link}
					to="/my-pokemon"
					value="/my-pokemon"
					className={classes.action}
					label="My Pokemon"
					icon={null}
					data-testid="my-pokemon-navigation"
				/>
			</BottomNavigation>
		</Hidden>
	);
};

export default MobileNavigation;
