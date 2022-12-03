import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cases from "../../pages/cases/Cases";
import Doctors from "../../pages/doctors/Doctors";
import Home from "../../pages/home/Home";
import Instruments from "../../pages/instruments/Instruments";
import LoginPage from "../../pages/login/LoginPage";
import PrefCardHome from "../../pages/pref-cards/PrefCardHome";
import SignUp from "../../pages/signup/SignUp";
import Supplies from "../../pages/supplies/Supplies";
import CaseDetail from "../pages/cases/CaseDetail";
import TrayDetails from "../pages/instruments/TrayDetails";
import PreferenceCard from "../pages/pref-cards/PreferenceCard";
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
					<Route path="/doctors" element={<Doctors />} />
					<Route path="/cases" element={<Cases />} />
					<Route
						path="/cases/:caseId"
						loader={({ params }) => {
							console.log("URL Params: ", params.caseId);
						}}
						element={<CaseDetail />}
					/>
					<Route path="/supplies" element={<Supplies />} />
					<Route path="/instruments" element={<Instruments />} />
					<Route
						path="/instruments/:trayId"
						loader={({ params }) => {
							console.log("URL PARAMS: ", params.trayId);
						}}
						element={<TrayDetails />}
					/>
					<Route path="/get-prefcard" element={<PrefCardHome />} />
					<Route
						path="/prefcard/:caseId/:doctorId"
						loader={({ params }) => {
							console.log(
								"URL PARAMS: ",
								params.caseId,
								params.doctorId
							);
						}}
						element={<PreferenceCard />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
