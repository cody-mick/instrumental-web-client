import { Outlet } from "react-router-dom";
import AppBarComponent from "../common/appBar/AppBarComponent";
import AppBar from "../common/appBar/AppBarComponent";
import NavBar from "../common/nav/NavBar";

export default function Page() {
	return (
		<div
			className="page"
			//  style={{ display: "flex" }}
		>
			{/* <NavBar /> */}
			<AppBarComponent />
			<div className="outlet-page">
				<Outlet />
			</div>
		</div>
	);
}
