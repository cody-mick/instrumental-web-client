import {
	IconButton,
	InputAdornment,
	OutlinedInput,
	TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export default function LoginPage() {
	const nav = useNavigate();
	const [passwordVisibility, setPasswordVisibility] = useState(false);

	return (
		<div className="login-page">
			<div className="login-page__left-half">
				<div className="login-form">
					<div className="login-form__container">
						<h3>Login</h3>
						<TextField label="Username" variant="outlined" />
						<OutlinedInput
							label="Password"
							type={passwordVisibility ? "text" : "password"}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={() => setPasswordVisibility(!passwordVisibility)}
										edge="end">
										{passwordVisibility ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							}
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
