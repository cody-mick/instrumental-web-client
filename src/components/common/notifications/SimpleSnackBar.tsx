import { Button, IconButton, Snackbar } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function SimpleSnackBar({ open, handleClose, message }: any) {
	const action = (
		<React.Fragment>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);
	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			message={message}
			action={action}
		/>
	);
}
