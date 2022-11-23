import { Button, TextField } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";

export default function DoctorEdit({ activeDoctor }: any) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [specialty, setSpecialty] = useState("");
	const [dominantHand, setDominantHand] = useState("");
	const [gloveSize, setGloveSize] = useState("");

	const updateDoctor = async (
		firstName: string,
		lastName: string,
		specialty: string,
		domHand: string,
		gloveSize: string,
		id: string
	) => {
		try {
			const doctorRef = doc(db, "doctors", id);
			await updateDoc(doctorRef, {
				firstName: firstName,
				lastName: lastName,
				dominantHand: domHand,
				specialty: specialty,
				gloveSize: gloveSize,
			});
			console.log("Doctor updated successfully!");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<TextField
				label="First Name"
				value={firstName}
				variant="outlined"
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<TextField
				label="Last Name"
				value={lastName}
				variant="outlined"
				onChange={(e) => setLastName(e.target.value)}
			/>
			<TextField
				label="Specialty"
				value={specialty}
				variant="outlined"
				onChange={(e) => setSpecialty(e.target.value)}
			/>
			<TextField
				label="Dominant Hand"
				value={dominantHand}
				variant="outlined"
				onChange={(e) => setDominantHand(e.target.value)}
			/>
			<TextField
				label="Glove Size"
				value={gloveSize}
				type="number"
				variant="outlined"
				onChange={(e) => setGloveSize(e.target.value)}
			/>
			<Button
				variant="contained"
				onClick={() =>
					updateDoctor(
						firstName,
						lastName,
						specialty,
						dominantHand,
						gloveSize,
						activeDoctor.firstName
					)
				}
			>
				Save
			</Button>
		</div>
	);
}
