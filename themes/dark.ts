import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "#1b2748",
		},
		primary: {
			//main: "#eaedfb",
			main: "#ffffff",
		},

		secondary: {
			main: "#d0d7f9",
		},
		error: {
			main: red.A400,
		},
	},

	components: {
		MuiAppBar: {
			defaultProps: {},
			styleOverrides: {
				root: {
					backgroundColor: "#3d4662",
				},
			},
		},
		MuiCardHeader: {
			styleOverrides: {
				root: {
					backgroundColor: "#252e4a",
				},
				title: {
					fontSize: "17px",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: "#243460",
				},
			},
		},
	},
});
