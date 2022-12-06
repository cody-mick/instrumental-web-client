import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import DoctorEditFormik from "./DoctorEditFormik";

export default function DoctorEditModal({
	open,
	handleClose,
	doctor,
	onSuccess,
}: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Edit Doctor</DialogTitle>
			<DialogContent>
				<DoctorEditFormik doctor={doctor} onSuccess={onSuccess} />
				<Button fullWidth onClick={handleClose} color="secondary">
					Cancel
				</Button>
			</DialogContent>
		</Dialog>
	);
}
