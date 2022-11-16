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
import { UserAuth } from "../../contexts/AuthContext";

export default function LoginPage() {
	const nav = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signInUser } = UserAuth();

	const signIn = async () => {
		try {
			await signInUser(email, password);
			nav("/dashboard");
		} catch (err: any) {
			console.log(err.message);
		}
	};

	return (
		<div className="login-page">
			<div className="login-page__left-half">
				<div className="login-form">
					<div className="login-form__container">
						<h3>Login</h3>
						<TextField
							label="Email"
							type="text"
							onChange={(e) => setEmail(e.target.value)}></TextField>
						<TextField
							label="Password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}></TextField>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#0ACDFF",
							}}
							onClick={signIn}>
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
