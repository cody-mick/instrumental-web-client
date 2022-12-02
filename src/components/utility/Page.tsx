import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppBarComponent from "../common/app-bar/AppBarComponent";

export default function Page() {
	return (
		<Box className="page">
			<AppBarComponent />
			<Box className="outlet-page">
				<Outlet />
			</Box>
		</Box>
	);
}
