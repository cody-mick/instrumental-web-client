import { Close } from "@mui/icons-material";
import {
	AppBar,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Slide,
	Toolbar,
	Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import EditCaseFormik from "./EditCaseFormik";

export default function EditCaseDialog({ open, handleClose, procedure }: any) {
	const Transition = React.forwardRef(function Transition(
		props: TransitionProps & {
			children: any;
		},
		ref
	) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			fullScreen
			TransitionComponent={Transition}>
			<AppBar sx={{ position: "relative" }}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={handleClose}
						aria-label="close">
						<Close />
					</IconButton>
					<Typography>{`Edit Case: #${procedure.caseId} - ${procedure.procedure}`}</Typography>
				</Toolbar>
			</AppBar>
			<DialogContent>
				<EditCaseFormik procedure={procedure} />
			</DialogContent>
		</Dialog>
	);
}
