import { createTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});
export const theme = createTheme({
	typeColors: {
		"&.normal": {
			backgroundColor: "#AAAA99",
		},
		"&.fire": {
			backgroundColor: "#FF4422",
		},
		"&.water": {
			backgroundColor: "#3399FF",
		},
		"&.electric": {
			backgroundColor: "#FFCC33",
		},
		"&.grass": {
			backgroundColor: "#77CC55",
		},
		"&.ice": {
			backgroundColor: "#66CCFF",
		},
		"&.fighting": {
			backgroundColor: "#BB5544",
		},
		"&.poison": {
			backgroundColor: "#AA5599",
		},
		"&.ground": {
			backgroundColor: "#DDBB55",
		},
		"&.flying": {
			backgroundColor: "#8899FF",
		},
		"&.psychic": {
			backgroundColor: "#FF5599",
		},
		"&.bug": {
			backgroundColor: "#AABB22",
		},
		"&.rock": {
			backgroundColor: "#BBAA66",
		},
		"&.ghost": {
			backgroundColor: "#6666BB",
		},
		"&.dragon": {
			backgroundColor: "#6666BB",
		},
		"&.steel": {
			backgroundColor: "#AAAABB",
		},
		"&.fairy": {
			backgroundColor: "#EE99EE",
		},
	},
	globalClasses: {
		// animations
		"@keyframes pokeballRotation": {
			"0%": {
				transform: "rotate(0)",
			},
			"15%": {
				transform: "rotate(-25deg)",
			},
			"30%": {
				transform: "rotate(25deg)",
			},
			"50%": {
				transform: "rotate(-25deg)",
			},
			"65%": {
				transform: "rotate(25deg)",
			},
			"100%": {
				transform: "rotate(0)",
			},
		},
		danger: {
			backgroundColor: "#FF1C1C !important",
		},
		success: {
			backgroundColor: "#28A745 !important",
		},
		container: {
			padding: "24px 12px 84px 12px",

			[breakpoints.up("md")]: {
				padding: "24px 12px",
			},
		},
		paginationContainer: {
			paddingTop: "24px",
			display: "flex",
			justifyContent: "center",
		},
	},
});
