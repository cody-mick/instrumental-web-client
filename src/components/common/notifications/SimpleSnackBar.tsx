import { Button, IconButton, Snackbar } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function SimpleSnackBar() {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(true);
	};
	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") return;

		setOpen(false);
	};

	const action = (
		<React.Fragment>
			<Button color="secondary" size="small" onClick={handleClose}>
				UNDO
			</Button>
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
		<div>
			<Button onClick={handleClick}>Open snackbar</Button>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message="Simple SnackBar"
				action={action}
			/>
		</div>
	);
}
