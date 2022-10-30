import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
	palette: {
		mode: "light",
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
		fontFamily: "Poppins",
		fontWeightRegular: 400,
	},
});

export default themeLight;
