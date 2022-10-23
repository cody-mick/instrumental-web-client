import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "../../pages/data/Data";
import Home from "../../pages/home/Home";
import LoginPage from "../../pages/login/LoginPage";
import SignUp from "../../pages/signup/SignUp";
import Page from "./Page";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Public Routes */}
				<Route path="/" element={<LoginPage />} />
				<Route path="/sign-up" element={<SignUp />} />
				{/* User Routes */}
				<Route element={<Page />}>
					<Route path="/dashboard" element={<Home />} />
					<Route path="/data-test" element={<Data />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
