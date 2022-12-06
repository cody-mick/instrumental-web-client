import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SimpleSnackBar from "../../common/notifications/SimpleSnackBar";
import DoctorDeleteWarning from "./DoctorDeleteWarning";
import DoctorEditModal from "./DoctorEditModal";

export default function DoctorDetailData({ doctor }: any) {
	const [doctorEdit, setDoctorEdit] = useState(false);
	const [deleteDoctor, setDeleteDoctor] = useState(false);
	const [deleteSuccess, setDeleteSuccess] = useState(false);
	const [editSuccess, setEditSuccess] = useState(false);
	const handleEditClose = () => {
		setDoctorEdit(false);
	};
	const cancelDelete = () => {
		setDeleteDoctor(false);
	};
	const onDeleteSuccess = () => {
		setDeleteDoctor(false);
		setDeleteSuccess(true);
	};
	const onEditSuccess = () => {
		setDoctorEdit(false);
		setEditSuccess(true);
	};

	return (
		<div>
			{!doctorEdit ? (
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
					{doctor.notes
						? doctor.notes.map((note: any) => (
								<Box
									sx={{
										marginBottom: "15px",
									}}>
									<Typography>Notes:</Typography>
									<Typography> - {note}</Typography>
								</Box>
						  ))
						: null}
					<Button
						variant="contained"
						onClick={() => setDoctorEdit(true)}>
						Edit Information
					</Button>
					<Button
						color="warning"
						variant="contained"
						sx={{ marginLeft: "15px" }}
						onClick={() => setDeleteDoctor(true)}>
						Delete
					</Button>
					{doctorEdit ? (
						<Button
							variant="contained"
							onClick={() => setDoctorEdit(false)}
							color="secondary">
							Cancel
						</Button>
					) : null}
				</div>
			) : (
				<div>
					<DoctorEditModal
						open={doctorEdit}
						handleClose={handleEditClose}
						doctor={doctor}
						onSuccess={onEditSuccess}
					/>
				</div>
			)}
			{deleteDoctor ? (
				<DoctorDeleteWarning
					open={deleteDoctor}
					doctor={doctor}
					onCancel={cancelDelete}
					onSuccess={onDeleteSuccess}
				/>
			) : null}
			<SimpleSnackBar
				open={deleteSuccess}
				handleClose={() => setDeleteSuccess(false)}
				message="Doctor deleted sucessfully!"
			/>
			<SimpleSnackBar
				open={editSuccess}
				handleClose={() => setEditSuccess(false)}
				message="Doctor updated successfully!"
			/>
		</div>
	);
}
