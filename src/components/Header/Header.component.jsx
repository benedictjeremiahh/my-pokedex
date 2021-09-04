import React from "react";
import PokemonLogo from "../../assets/svg/pokemon_logo.svg";
import { useStyles } from "./Header.styles";

const Header = () => {
	const classes = useStyles();
	return (
		<header className={classes.title}>
			<img src={PokemonLogo} alt="Pokemon Logo" />
		</header>
	);
};

export default Header;
