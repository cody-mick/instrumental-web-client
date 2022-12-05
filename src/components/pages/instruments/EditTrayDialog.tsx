import { Button, Dialog, DialogContent } from "@mui/material";
import React from "react";
import EditTrayFormik from "./EditTrayFormik";

export default function EditTrayDialog({ open, handleClose, tray }: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogContent>
				<EditTrayFormik tray={tray} />
				<Button
					type="button"
					onClick={() => handleClose}
					color="secondary">
					Cancel
				</Button>
			</DialogContent>
		</Dialog>
	);
}
