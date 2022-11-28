import {
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";
import React from "react";

export default function AddCaseModal({ open, handleClose }: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add a Case</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To add a case to the database, please fill out the form
					below and press "Submit"
				</DialogContentText>
				<TextField />
			</DialogContent>
		</Dialog>
	);
}
