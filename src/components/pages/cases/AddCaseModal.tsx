import {
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@mui/material";
import AddCaseFormik from "./AddCaseFormik";

export default function AddCaseModal({ open, handleClose }: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add a Case</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To add a case to the database, please fill out the form
					below and press "Submit"
				</DialogContentText>
				<AddCaseFormik />
				<Button onClick={handleClose} color="secondary">
					Cancel
				</Button>
			</DialogContent>
		</Dialog>
	);
}
