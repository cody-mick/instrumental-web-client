import { useNavigate } from "react-router-dom";

export default function NavLink({ title, children, navTo }: any) {
	const nav = useNavigate();

	return (
		<div className="nav-item" onClick={() => nav(navTo)}>
			{children}
			<p className="nav-item__text">{title}</p>
		</div>
	);
}
