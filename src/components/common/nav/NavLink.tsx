import { useNavigate } from "react-router-dom";

export default function NavLink({ title, children, navTo, icon }: any) {
	const nav = useNavigate();

	return (
		<div className="nav-item" onClick={() => nav(navTo)}>
			<svg data-testid={icon}></svg>
			<p className="nav-item__text">{title}</p>
		</div>
	);
}
