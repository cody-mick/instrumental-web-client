import {
	Button,
	IconButton,
	InputAdornment,
	OutlinedInput,
	TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { signOut } from "firebase/auth";

export default function LoginPage() {
	const nav = useNavigate();
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const login = async () => {};

	return (
		<div className="login-page">
			<div className="login-page__left-half">
				<div className="login-form">
					<div className="login-form__container">
						<h3>Login</h3>
						<TextField label="Email" type="text"></TextField>
						<TextField label="Password" type="password"></TextField>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#0ACDFF",
							}}
							onClick={() => nav("/dashboard")}>
							Login
						</Button>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#0ACDFF",
							}}
							onClick={() => nav("/sign-up")}>
							Sign Up
						</Button>
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
