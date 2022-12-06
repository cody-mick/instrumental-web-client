import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import EditTrayFormik from "./EditTrayFormik";

export default function EditTrayDialog({
	open,
	handleClose,
	tray,
	onSuccess,
}: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Edit Instrument Tray</DialogTitle>
			<DialogContent>
				<EditTrayFormik tray={tray} onSuccess={onSuccess} />
				<Button
					fullWidth
					type="button"
					onClick={handleClose}
					color="secondary">
					Cancel
				</Button>
			</DialogContent>
		</Dialog>
	);
}
