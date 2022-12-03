import {
	Box,
	Button,
	IconButton,
	InputAdornment,
	OutlinedInput,
	TextField,
	Typography,
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
	//@ts-ignore
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
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "15px",
				width: "35%",
				margin: "auto",
				marginTop: "10%",
			}}
		>
			<Typography textAlign="center" fontSize={24} color="primary">
				instrumental
			</Typography>
			<Typography sx={{ fontSize: 24 }}>Login</Typography>
			<TextField
				label="Email"
				type="text"
				onChange={(e) => setEmail(e.target.value)}
			></TextField>
			<TextField
				label="Password"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
			></TextField>
			<Box
				sx={{
					margin: "auto",
					display: "flex",
					flexDirection: "column",
					gap: "15px",
					width: "65%",
				}}
			>
				<Button
					variant="contained"
					style={{
						backgroundColor: "#0ACDFF",
					}}
					onClick={signIn}
				>
					Login
				</Button>
				<Button
					variant="contained"
					style={{
						backgroundColor: "#0ACDFF",
					}}
					onClick={() => nav("/sign-up")}
				>
					Sign Up
				</Button>
			</Box>
		</Box>
	);
}
