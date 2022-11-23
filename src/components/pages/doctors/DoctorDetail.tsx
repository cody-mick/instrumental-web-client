import { Button, Paper } from "@mui/material";
import { useState } from "react";
import DoctorEdit from "./DoctorEdit";

export default function DoctorDetail({ doctor }: any) {
	const [editDocInfo, setEditDocInfo] = useState(false);
	return (
		<Paper>
			<div style={{ width: 450, padding: 35 }}>
				<p style={{ fontSize: 24 }}>
					{`${doctor.firstName} ${doctor.lastName}`}
				</p>
				<p>Specialty: {doctor.specialty}</p>
				<p>Dominant Hand: {doctor.dominantHand}</p>
				<p>Glove Size: {doctor.gloveSize}</p>
				{doctor.musicPreference ? (
					<p>Music Preference: {doctor.musicPreference}</p>
				) : null}
				<Button
					variant="contained"
					onClick={() => setEditDocInfo(true)}
				>
					Edit Information
				</Button>
				{editDocInfo ? <DoctorEdit /> : null}
			</div>
		</Paper>
	);
}
