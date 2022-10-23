import { TextField } from "@mui/material";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";

export default function SignUp() {
	const auth = getAuth();
	createUserWithEmailAndPassword(auth, "cody.b.mick@gmail.com", "1234")
		.then((userCredential) => {
			const user = userCredential.user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, ": ", errorMessage);
		});
	return (
		<div className="signup-form">
			<h1>Create Account</h1>
			<TextField id="outlined-basic" label="Username" variant="outlined" />
			<TextField
				id="outlined-basic"
				label="Password"
				variant="outlined"
				type="password"
			/>
			<TextField
				id="outlined-basic"
				label="Confirm Password"
				variant="outlined"
				type="password"
			/>
		</div>
	);
}
