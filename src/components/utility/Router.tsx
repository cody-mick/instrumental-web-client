import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cases from "../../pages/cases/Cases";
import Data from "../../pages/data/Data";
import Doctors from "../../pages/doctors/Doctors";
import Home from "../../pages/home/Home";
import Instruments from "../../pages/instruments/Instruments";
import LoginPage from "../../pages/login/LoginPage";
import PrefCardHome from "../../pages/pref-cards/PrefCardHome";
import SignUp from "../../pages/signup/SignUp";
import Supplies from "../../pages/supplies/Supplies";
import CaseDetail from "../pages/cases/CaseDetail";
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
					<Route index path="/dashboard" element={<Home />} />
					<Route path="/data-test" element={<Data />} />
					<Route path="/doctors" element={<Doctors />} />
					<Route path="/cases" element={<Cases />} />
					<Route
						path="/cases/:caseId"
						loader={({ params }) => {
							console.log("URL Params: ", params.caseId);
						}}
						action={({ params }) => {}}
						element={<CaseDetail />}
					/>
					<Route path="/supplies" element={<Supplies />} />
					<Route path="/instruments" element={<Instruments />} />
					<Route
						path="/preference-cards"
						element={<PrefCardHome />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
