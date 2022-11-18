import { Button, Paper, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebase";

export default function AddDoctorForm() {
	const [newDocName, setNewDocName] = useState("");
	const [newDocSpecialty, setNewDocSpecialty] = useState("");
	const [newDocGloveSize, setNewDocGloveSize] = useState("");
	const [newDocDominantHand, setNewDocDominantHand] = useState("");

	const addDoctor = async (
		name: string,
		specialty: string,
		domHand: string,
		gloveSize: string
	) => {
		try {
			const docRef = await addDoc(collection(db, "doctors"), {
				name: name,
				dominantHand: domHand,
				gloveSize: gloveSize,
				specialty: specialty,
			});
			console.log("Doctor created with ID: ", docRef.id);
			setNewDocName("");
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
				}}>
				<TextField
					label="Doctor Name"
					variant="outlined"
					value={newDocName}
					onChange={(e) => setNewDocName(e.target.value)}
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
							newDocName,
							newDocSpecialty,
							newDocDominantHand,
							newDocGloveSize
						)
					}>
					Add Doctor
				</Button>
			</Paper>
		</div>
	);
}
