import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebase";
import SimpleSnackBar from "../../common/notifications/SimpleSnackBar";

export default function DoctorDeleteWarning({
	open,
	doctor,
	onCancel,
	onSuccess,
}: any) {
	const [loading, setLoading] = useState(false);
	const [notification, setNotification] = useState(false);
	const deleteDoctor = async () => {
		try {
			setLoading(true);
			await deleteDoc(doc(db, "doctors", doctor.id));
			onSuccess();
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Dialog open={open}>
			<DialogTitle>Confirm Doctor Delete</DialogTitle>
			<DialogContent sx={{ fontFamily: "Quicksand" }}>
				{loading ? (
					<CircularProgress />
				) : (
					`Are you sure that you want to delete ${doctor.firstName} ${doctor.lastName}? This action is permanent and cannot be undone.`
				)}
			</DialogContent>
			<DialogActions>
				<Button color="warning" onClick={onCancel}>
					No
				</Button>
				<Button onClick={deleteDoctor}>Yes</Button>
			</DialogActions>
			{notification ? (
				<SimpleSnackBar
					open={notification}
					handleClose={() => setNotification(false)}
					message="Doctor deleted sucessfully!"
				/>
			) : null}
		</Dialog>
	);
}
