import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
} from "@mui/material";
import React from "react";
import useDeleteTray from "./useDeleteTray";

export default function DeleteTrayWarning({
	open,
	handleClose,
	trayId,
	onSuccess,
}: any) {
	const { loading, deleteTrayHandler } = useDeleteTray();
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Confirm Tray Delete</DialogTitle>
			<DialogContent>
				{loading ? (
					<CircularProgress />
				) : (
					<Typography>{`Are you sure you want to delete this tray? This action is permanent and cannot be undone.`}</Typography>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>No</Button>
				<Button
					onClick={() => deleteTrayHandler(trayId, onSuccess)}
					color="warning">
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	);
}
