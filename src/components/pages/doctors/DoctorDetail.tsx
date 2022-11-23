import { Button, Paper } from "@mui/material";
import { useState } from "react";
import DoctorEdit from "./DoctorEdit";

export default function DoctorDetail({ doctor }: any) {
	const [editDocInfo, setEditDocInfo] = useState(false);
	return (
		<Paper
			sx={{
				height: "350px",
				width: "300px",
				marginTop: "15px",
				padding: "25px",
			}}
		>
			{!editDocInfo ? (
				<div>
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
					{editDocInfo ? (
						<Button
							variant="contained"
							onClick={() => setEditDocInfo(false)}
							color="secondary"
							sx={{ marginLeft: "10px" }}
						>
							Cancel
						</Button>
					) : null}
					{editDocInfo ? <DoctorEdit activeDoctor={doctor} /> : null}
				</div>
			) : (
				<div>
					<DoctorEdit />
					<Button
						variant="contained"
						color="secondary"
						onClick={() => setEditDocInfo(false)}
					>
						Cancel
					</Button>
				</div>
			)}
		</Paper>
	);
}
