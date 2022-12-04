import { async } from "@firebase/util";
import { Alert, AlertTitle, Button } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";
import SimpleSnackBar from "../../common/notifications/SimpleSnackBar";
import DoctorDeleteWarning from "./DoctorDeleteWarning";
import DoctorEdit from "./DoctorEdit";

export default function DoctorDetailData({ doctor }: any) {
	const [editDocInfo, setEditDocInfo] = useState(false);
	const [deleteDoctor, setDeleteDoctor] = useState(false);
	const cancelEdit = () => {
		setEditDocInfo(false);
	};
	const cancelDelete = () => {
		setDeleteDoctor(false);
	};
	const [notification, setNotification] = useState(false);
	const onSuccess = () => {
		setDeleteDoctor(false);
		setNotification(true);
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
						onClick={() => setEditDocInfo(true)}>
						Edit Information
					</Button>
					<Button
						color="warning"
						variant="contained"
						sx={{ marginLeft: "15px" }}
						onClick={() => setDeleteDoctor(true)}>
						Delete
					</Button>
					{editDocInfo ? (
						<Button
							variant="contained"
							onClick={() => setEditDocInfo(false)}
							color="secondary">
							Cancel
						</Button>
					) : null}
				</div>
			) : (
				<div>
					<DoctorEdit
						activeDoctor={doctor}
						onCancel={cancelEdit}
						onSuccess={() => setEditDocInfo(false)}
					/>
				</div>
			)}
			{deleteDoctor ? (
				<DoctorDeleteWarning
					open={deleteDoctor}
					doctor={doctor}
					onCancel={cancelDelete}
					onSuccess={onSuccess}
				/>
			) : null}
			{notification ? (
				<SimpleSnackBar
					open={notification}
					handleClose={() => setNotification(false)}
					message="Doctor deleted sucessfully!"
				/>
			) : null}
		</div>
	);
}
