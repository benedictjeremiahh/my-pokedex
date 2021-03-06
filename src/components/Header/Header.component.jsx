import { Hidden } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import PokemonLogo from "../../assets/svg/pokemon_logo.svg";
import { useStyles } from "./Header.styles";

const Header = () => {
	const classes = useStyles();
	return (
		<header className={classes.header} data-testid="header">
			<NavLink to={`${process.env.PUBLIC_URL}/`}>
				<img src={PokemonLogo} alt="Pokemon Logo" />
			</NavLink>
			<Hidden smDown>
				<nav
					className={classes.navigation}
					data-testid="header-navigation"
				>
					<NavLink
						to={`${process.env.PUBLIC_URL}/`}
						activeClassName={classes.activeNavLink}
						exact
						data-testid="pokemon-list-header-navigation"
					>
						Pokemon List
					</NavLink>
					<NavLink
						to={`${process.env.PUBLIC_URL}/my-pokemon`}
						activeClassName={classes.activeNavLink}
						exact
						data-testid="my-pokemon-header-navigation"
					>
						My Pokemon
					</NavLink>
				</nav>
			</Hidden>
		</header>
	);
};

export default Header;
