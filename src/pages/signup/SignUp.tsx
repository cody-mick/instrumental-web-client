import { Button, TextField } from "@mui/material";
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
	// const [registerEmail, setRegisterEmail] = useState("");
	// const [registerPassword, setRegisterPassword] = useState("");
	// const [user, setUser] = useState({});
	// onAuthStateChanged(auth, (currentUser) => {
	// 	//@ts-ignore
	// 	setUser(currentUser);
	// });
	// const [loginEmail, setLoginEmail] = useState("");
	// const [loginPassword, setLoginPassword] = useState("");
	// const register = async () => {
	// 	try {
	// 		const user = await createUserWithEmailAndPassword(
	// 			auth,
	// 			registerEmail,
	// 			registerPassword
	// 		);
	// 		console.log(user);
	// 	} catch (err: any) {
	// 		console.log("An error has occurred: ", err.message);
	// 	}
	// };
	// const login = async () => {};
	// const logout = async () => {};

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
		<div>
			<h3>Sign Up</h3>
			<TextField
				variant="outlined"
				label="Email"
				onChange={(event) => setEmail(event.target.value)}></TextField>
			<TextField
				variant="outlined"
				label="Password"
				onChange={(event) => setPassword(event.target.value)}></TextField>
			<p>{error ? error : null}</p>
			<Button onClick={register}>Create Account</Button>
		</div>
	);
}
