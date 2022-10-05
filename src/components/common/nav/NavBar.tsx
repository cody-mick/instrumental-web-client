import NavLink from "./NavLink";

export default function NavBar() {
	return (
		<div className="nav-bar-container">
			<NavLink title="Cases"></NavLink>
			<NavLink title="Doctors"></NavLink>
			<NavLink title="Instruments"></NavLink>
		</div>
	);
}
