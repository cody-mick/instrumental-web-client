import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Modal,
	Typography,
} from "@mui/material";
import React from "react";
import AddDoctorForm from "./AddDoctorForm";

export default function AddDoctorModal({ open, handleClose }: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Subscribe</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To add a doctor, please fill in the information into the form and
					click "Add Doctor"
				</DialogContentText>
				<AddDoctorForm />
				<DialogActions>
					<Button onClick={() => {}}>Cancel</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
}
