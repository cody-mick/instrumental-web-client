import { Button } from "@mui/material";
import { useState } from "react";
import DoctorEdit from "./DoctorEdit";

export default function DoctorDetailData({ doctor }: any) {
	const [editDocInfo, setEditDocInfo] = useState(false);
	const cancelEdit = () => {
		setEditDocInfo(false);
	};

	return (
		<div>
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
						>
							Cancel
						</Button>
					) : null}
				</div>
			) : (
				<div>
					<DoctorEdit activeDoctor={doctor} onCancel={cancelEdit} />
				</div>
			)}
		</div>
	);
}
