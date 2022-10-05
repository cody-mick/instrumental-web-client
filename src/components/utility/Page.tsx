import { Outlet } from "react-router-dom";
import NavBar from "../common/nav/NavBar";

export default function Page() {
	return (
		<div className="page" style={{ display: "flex" }}>
			<NavBar />
			<div className="outlet-page">
				<Outlet />
			</div>
		</div>
	);
}
