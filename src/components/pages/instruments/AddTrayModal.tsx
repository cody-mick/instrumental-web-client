import { Dialog, DialogTitle } from "@mui/material";
import React from "react";

export default function AddTrayModal({ open, handleClose }: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add an Instrument Tray</DialogTitle>
		</Dialog>
	);
}
