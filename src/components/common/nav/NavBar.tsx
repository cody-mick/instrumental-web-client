import NavLink from "./NavLink";
import AssignmentIcon from "@mui/icons-material/Assignment";

export default function NavBar() {
	return (
		<div className="nav-bar-container">
			<NavLink title="Cases">
				<AssignmentIcon />
			</NavLink>
			<NavLink title="Doctors"></NavLink>
			<NavLink title="Instruments"></NavLink>
		</div>
	);
}
