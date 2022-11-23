import { Button, Paper, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebase";

export default function AddDoctorForm({ onSuccess }: any) {
	const [newDocFirstName, setNewDocFirstName] = useState("");
	const [newDocLastName, setNewDocLastName] = useState("");
	const [newDocSpecialty, setNewDocSpecialty] = useState("");
	const [newDocGloveSize, setNewDocGloveSize] = useState("");
	const [newDocDominantHand, setNewDocDominantHand] = useState("");

	const addDoctor = async (
		firstName: string,
		lastName: string,
		specialty: string,
		domHand: string,
		gloveSize: string
	) => {
		try {
			const docRef = await addDoc(collection(db, "doctors"), {
				firstName: firstName,
				lastName: lastName,
				dominantHand: domHand,
				gloveSize: gloveSize,
				specialty: specialty,
			});
			console.log("Doctor created with ID: ", docRef.id);
			onSuccess();
			setNewDocFirstName("");
			setNewDocLastName("");
			setNewDocSpecialty("");
			setNewDocDominantHand("");
			setNewDocGloveSize("");
		} catch (e) {
			console.error("Could not complete request: ", e);
		}
	};

	return (
		<div>
			<Paper
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "15px",
					width: "50%",
					margin: "0 auto",
					marginTop: "15px",
					padding: "15px",
				}}
			>
				<TextField
					label="First Name"
					variant="outlined"
					value={newDocFirstName}
					onChange={(e) => setNewDocFirstName(e.target.value)}
				/>
				<TextField
					label="Last Name"
					variant="outlined"
					value={newDocLastName}
					onChange={(e) => setNewDocLastName(e.target.value)}
				/>
				<TextField
					label="Specialty"
					variant="outlined"
					value={newDocSpecialty}
					onChange={(e) => setNewDocSpecialty(e.target.value)}
				/>
				<TextField
					label="Dominant Hand"
					variant="outlined"
					value={newDocDominantHand}
					onChange={(e) => setNewDocDominantHand(e.target.value)}
				/>
				<TextField
					label="Glove Size"
					variant="outlined"
					type="number"
					value={newDocGloveSize}
					onChange={(e) => setNewDocGloveSize(e.target.value)}
				/>
				<Button
					variant="contained"
					onClick={() =>
						addDoctor(
							newDocFirstName,
							newDocLastName,
							newDocSpecialty,
							newDocDominantHand,
							newDocGloveSize
						)
					}
				>
					Add Doctor
				</Button>
			</Paper>
		</div>
	);
}
