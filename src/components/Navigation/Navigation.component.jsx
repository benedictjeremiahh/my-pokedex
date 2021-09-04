import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Navigation.styles";

const Navigation = () => {
	const [value, setValue] = React.useState(0);
	const classes = useStyles();

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
			className={classes.root}
		>
			<BottomNavigationAction
				className={classes.action}
				label="Pokemon List"
				icon={null}
			/>
			<BottomNavigationAction
				className={classes.action}
				label="My Pokemon"
				icon={null}
			/>
		</BottomNavigation>
	);
};

export default Navigation;
