import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cases from "../../pages/cases/Cases";
import Data from "../../pages/data/Data";
import Doctors from "../../pages/doctors/Doctors";
import Home from "../../pages/home/Home";
import Instruments from "../../pages/instruments/Instruments";
import LoginPage from "../../pages/login/LoginPage";
import SignUp from "../../pages/signup/SignUp";
import Supplies from "../../pages/supplies/Supplies";
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
					<Route path="/doctors" element={<Doctors />} />
					<Route path="/cases" element={<Cases />} />
					<Route path="/supplies" element={<Supplies />} />
					<Route path="instruments" element={<Instruments />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
