import { Hidden } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import PokemonLogo from "../../assets/svg/pokemon_logo.svg";
import { useStyles } from "./Header.styles";

const Header = () => {
	const classes = useStyles();
	return (
		<header className={classes.header} data-testid="header">
			<img src={PokemonLogo} alt="Pokemon Logo" />
			<Hidden smDown>
				<nav className={classes.navigation} data-testid="header-navigation">
					<NavLink
						to="/"
						activeClassName={classes.activeNavLink}
						exact
					>
						Pokemon List
					</NavLink>
					<NavLink
						to="/my-pokemon"
						activeClassName={classes.activeNavLink}
						exact
					>
						My Pokemon
					</NavLink>
				</nav>
			</Hidden>
		</header>
	);
};

export default Header;
