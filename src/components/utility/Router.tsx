import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import LoginPage from "../../pages/login-page/LoginPage";
import Page from "./Page";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<LoginPage />} />
				{/* User Routes */}
				<Route element={<Page />}>
					<Route path="/dashboard" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
