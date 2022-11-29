import { ThemeProvider } from "@mui/system";
import { useAtom } from "jotai";
import "../styles/app.scss";
import Router from "./components/utility/Router";
import { doctorsAtom } from "./utilities/atoms/doctorsAtom";
import themeLight from "../styles/themes/light-theme";
import { AuthContextProvider } from "./contexts/AuthContext";
import CasesProvider from "./contexts/CasesContext";

function App() {
	return (
		<div className="page-wrapper">
			<AuthContextProvider>
				<CasesProvider>
					<ThemeProvider theme={themeLight}>
						<Router />
					</ThemeProvider>
				</CasesProvider>
			</AuthContextProvider>
		</div>
	);
}

export default App;
