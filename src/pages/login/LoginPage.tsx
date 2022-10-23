import { useNavigate } from "react-router-dom";

export default function LoginPage() {
	const nav = useNavigate();

	return (
		<div className="login-page">
			<div className="login-page__left-half">
				<div className="login-form">
					<div className="login-form__container">
						<h3>Login</h3>
						<input
							type="text"
							placeholder="Username"
							className="username-input"
						/>
						<input
							type="password"
							placeholder="Password"
							className="password-input"
						/>
						<button
							type="button"
							onClick={() => nav("dashboard")}
							className="login-button">
							Login
						</button>
					</div>
				</div>
			</div>
			<div className="login-page__right-half">
				<div className="logo">INSTRUMENTAL</div>
				<div className="flavor-text">
					"The Only App You'll Ever Need" - Doctors Everywhere
				</div>
			</div>
		</div>
	);
}
