import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import SimpleSnackBar from "../../common/notifications/SimpleSnackBar";
import AddDoctorForm from "./AddDoctorForm";
import AddDoctorFormik from "./AddDoctorFormik";

export default function AddDoctorModal({ open, handleClose }: any) {
	const [notification, setNotification] = useState(false);
	const onSuccessHandler = setNotification(true);

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add a New Doctor</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To add a doctor, please fill in the information into the
					form and click "Add Doctor"
				</DialogContentText>
				<AddDoctorFormik />
				<DialogActions>
					<Button onClick={() => handleClose()}>Cancel</Button>
				</DialogActions>
			</DialogContent>
			{notification ? (
				<SimpleSnackBar
					open={notification}
					handleClose={() => setNotification(false)}
					message="Doctor added successfully!"
				/>
			) : null}
		</Dialog>
	);
}
