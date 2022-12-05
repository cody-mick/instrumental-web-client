import {
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import SimpleSnackBar from "../../common/notifications/SimpleSnackBar";
import AddCaseFormik from "./AddCaseFormik";
import useAddCaseFormSubmission from "./useAddCaseFormSubmission";

export default function AddCaseModal({ open, handleClose, onSuccess }: any) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add a Case</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To add a case to the database, please fill out the form
					below and press "Submit"
				</DialogContentText>
				<AddCaseFormik onSuccess={onSuccess} />
				<Button onClick={handleClose} color="secondary">
					Cancel
				</Button>
			</DialogContent>
		</Dialog>
	);
}
