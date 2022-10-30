import { ThemeProvider } from "@mui/system";
import { useAtom } from "jotai";
import "../styles/app.scss";
import Router from "./components/utility/Router";
import { doctorsAtom } from "./utilities/atoms/doctorsAtom";
import themeLight from "../styles/themes/light-theme";

function App() {
	const [doctors, setDoctors] = useAtom(doctorsAtom);
	return (
		<div className="page-wrapper">
			<ThemeProvider theme={themeLight}>
				<Router />
			</ThemeProvider>
		</div>
	);
}

export default App;
