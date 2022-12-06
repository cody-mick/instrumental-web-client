import { Box, Button, TextField } from "@mui/material";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebase";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	// @ts-ignore
	const { createUser } = UserAuth();
	const nav = useNavigate();

	const register = async () => {
		setError("");
		try {
			await createUser(email, password);
			nav("/dashboard");
		} catch (err: any) {
			setError(err.message);
			console.log(err.message);
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItem: "center",
				width: "50%",
				margin: "auto",
				gap: "15px",
				marginTop: "15%",
			}}>
			<h3>Sign Up</h3>
			<TextField
				variant="outlined"
				label="Email"
				onChange={(event) => setEmail(event.target.value)}
			/>
			<TextField
				variant="outlined"
				label="Password"
				onChange={(event) => setPassword(event.target.value)}
			/>
			<p>{error ? error : null}</p>
			<Button onClick={register}>Create Account</Button>
		</Box>
	);
}
