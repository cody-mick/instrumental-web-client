import { ThemeProvider } from "@mui/system";
import "../styles/app.scss";
import Router from "./components/utility/Router";
import themeLight from "../styles/themes/light-theme";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
	return (
		<div className="page-wrapper">
			<AuthContextProvider>
				<ThemeProvider theme={themeLight}>
					<Router />
				</ThemeProvider>
			</AuthContextProvider>
		</div>
	);
}

export default App;
