import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import AddTrayFormik from "./AddTrayFormik";

export default function AddTrayModal({ open, handleClose }: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add an Instrument Tray</DialogTitle>
			<DialogContent>
				<AddTrayFormik />
			</DialogContent>
		</Dialog>
	);
}
