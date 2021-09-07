import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	header: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		zIndex: 1202,
		margin: "24px 24px 0 24px",

		[theme.breakpoints.up("md")]: {
			justifyContent: "space-between",
			alignItems: "center",
			"& a": {
				padding: "12px",
				margin: "0 12px",
				position: "relative",

				"&:after": {
					transition: "width 0.2s ease-out",
					transformOrigin: "center left",
					position: "absolute",
					bottom: "-2px",
					content: "''",
					height: "2px",
					backgroundImage:
						"linear-gradient(to bottom right, #D579C8, #FF1C1C)",
					margin: "0 auto",
					left: "0",
					right: "0",
					width: "0",
				},
				"&:hover": {
					fontWeight: "bold",
					"&:after": {
						width: "100%",
					},
				},
			},
		},
	},
	activeNavLink: {
		fontWeight: "bold",
		"&:after": {
			width: "100% !important",
		},
	},
}));
