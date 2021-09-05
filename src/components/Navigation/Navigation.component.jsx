import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./Navigation.styles";

const Navigation = () => {
	const [value, setValue] = React.useState("pokemons");
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
				component={Link}
				to="/"
				value="pokemons"
				className={classes.action}
				label="Pokemon List"
				icon={null}
			/>
			<BottomNavigationAction
				component={Link}
				to="/my-pokemon"
				value="my-pokemon"
				className={classes.action}
				label="My Pokemon"
				icon={null}
			/>
		</BottomNavigation>
	);
};

export default Navigation;
