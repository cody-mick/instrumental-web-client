import { Button, TextField } from "@mui/material";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

export default function SignUp() {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [user, setUser] = useState({});
	onAuthStateChanged(auth, (currentUser) => {
		//@ts-ignore
		setUser(currentUser);
	});
	// const [loginEmail, setLoginEmail] = useState("");
	// const [loginPassword, setLoginPassword] = useState("");
	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
		} catch (err: any) {
			console.log("An error has occurred: ", err.message);
		}
	};
	// const login = async () => {};
	// const logout = async () => {};
	return (
		<div>
			<h3>Sign Up</h3>
			<TextField
				variant="outlined"
				label="Email"
				onChange={(event) => setRegisterEmail(event.target.value)}></TextField>
			<TextField
				variant="outlined"
				label="Password"
				onChange={(event) =>
					setRegisterPassword(event.target.value)
				}></TextField>
			<Button onClick={register}>Create Account</Button>
		</div>
	);
}
