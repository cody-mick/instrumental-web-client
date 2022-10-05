export default function LoginPage() {
	return (
		<div className="login-page">
			<div className="login-page__left-half">
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
				<button>Login</button>
			</div>
			<div className="login-page__right-half">
				<div className="logo">LOGO</div>
				<div className="flavor-text">FLAVOR</div>
			</div>
		</div>
	);
}
