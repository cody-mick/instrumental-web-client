import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
	palette: {
		mode: "light",
		background: {
			default: "#d6d6d6",
			paper: "#eaeaea",
		},
		primary: {
			main: "#0acdff",
		},
		secondary: {
			main: "#78909c",
		},
		success: {
			main: "#0affb6",
		},
		error: {
			main: "#d32f2f",
		},
	},
	typography: {
		fontFamily: "Quicksand",
		fontWeightRegular: 400,
	},
});

export default themeLight;
