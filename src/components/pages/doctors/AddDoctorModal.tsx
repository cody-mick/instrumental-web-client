import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { useState } from "react";
import SimpleSnackBar from "../../common/notifications/SimpleSnackBar";
import AddDoctorFormik from "./AddDoctorFormik";

export default function AddDoctorModal({ open, handleClose, onSuccess }: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add a New Doctor</DialogTitle>
			<DialogContent>
				<DialogContentText sx={{ marginBotom: "15px" }}>
					To add a doctor, fill in the required information and click
					"Add Doctor"
				</DialogContentText>
				<AddDoctorFormik onSuccess={onSuccess} />
				<DialogActions>
					<Button onClick={() => handleClose()}>Cancel</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
}
