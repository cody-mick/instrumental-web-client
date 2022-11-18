import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import AddDoctorForm from "./AddDoctorForm";

export default function AddDoctorModal({ open, handleClose }: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add a New Doctor</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To add a doctor, please fill in the information into the form and
					click "Add Doctor"
				</DialogContentText>
				<AddDoctorForm />
				<DialogActions>
					<Button onClick={() => handleClose()}>Cancel</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
}
