import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import AddTrayFormik from "./AddTrayFormik";

export default function AddTrayModal({ open, handleClose, onSuccess }: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add an Instrument Tray</DialogTitle>
			<DialogContent>
				<AddTrayFormik onSuccess={onSuccess} />
				<Button fullWidth color="secondary" onClick={handleClose}>
					Cancel
				</Button>
			</DialogContent>
		</Dialog>
	);
}
