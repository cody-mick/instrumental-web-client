import { Box, Button, TextField } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";
import SimpleSnackBar from "../../common/notifications/SimpleSnackBar";

export default function DoctorEdit({ activeDoctor, onCancel, onSuccess }: any) {
	console.log("ACTIVE DOCTOR: ", activeDoctor);
	const [firstName, setFirstName] = useState(activeDoctor.firstName);
	const [lastName, setLastName] = useState(activeDoctor.lastName);
	const [specialty, setSpecialty] = useState(activeDoctor.specialty);
	const [dominantHand, setDominantHand] = useState(activeDoctor.dominantHand);
	const [gloveSize, setGloveSize] = useState(activeDoctor.gloveSize);
	const [notification, setNotification] = useState(false);

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
			setNotification(true);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
			}}
		>
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
						activeDoctor.id
					)
				}
			>
				Save
			</Button>
			<Button variant="contained" onClick={onCancel} color="secondary">
				Cancel
			</Button>
			{notification ? (
				<SimpleSnackBar
					open={notification}
					handleClose={() => setNotification(false)}
					message="Doctor updated successfully!"
					color="success"
				/>
			) : null}
		</Box>
	);
}
