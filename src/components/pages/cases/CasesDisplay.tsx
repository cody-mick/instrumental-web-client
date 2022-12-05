import { Delete, Edit, HealthAndSafety, MoreVert } from "@mui/icons-material";
import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Menu,
	MenuItem,
	Paper,
	SpeedDial,
	SpeedDialAction,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCaseModal from "./AddCaseModal";
import EditCaseDialog from "./EditCaseDialog";
import useCaseDelete from "./useCaseDelete";

export default function CasesDisplay({ cases }: any) {
	const [editModal, setEditModal] = useState(false);
	const [addCaseModal, setAddCaseModal] = useState(false);
	const [editCase, setEditCase] = useState(false);
	const [deleteWarning, setDeleteWarning] = useState(false);
	const [selectedCase, setSelectedCase] = useState({});
	const [selectedCaseId, setSelectedCaseId] = useState("");
	const { deleteCaseHandler, loading } = useCaseDelete();

	const closeDeleteWarning = () => {
		setDeleteWarning(false);
	};
	const handleEditClose = () => {
		setEditCase(false);
	};

	return (
		<div>
			<TableContainer
				component={Paper}
				sx={{
					maxWidth: "50%",
					padding: "15px",
					margin: "auto",
					marginTop: "15px",
				}}>
				<Table sx={{ maxWidth: 950 }}>
					<TableHead>
						<TableRow>
							<TableCell>Case ID</TableCell>
							<TableCell>Case Name</TableCell>
							<TableCell align="center">Options</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cases.map((c: any, index: any) => {
							return (
								<TableRow key={c.caseId}>
									<TableCell>{c.caseId}</TableCell>
									<TableCell>
										<Link
											to={`/cases/${c.caseId}`}
											style={{
												textDecoration: "none",
												color: "inherit",
											}}>
											{c.procedure}
										</Link>
									</TableCell>
									<TableCell align="center">
										<IconButton
											onClick={() => {
												setEditCase(true);
												setSelectedCase(c);
											}}>
											<Edit />
										</IconButton>
										<IconButton
											onClick={() => {
												setDeleteWarning(true);
												setSelectedCaseId(c.id);
											}}>
											<Delete />
										</IconButton>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			{addCaseModal ? (
				<AddCaseModal
					open={addCaseModal}
					handleClose={() => setAddCaseModal(false)}
				/>
			) : null}
			<Dialog open={deleteWarning} onClose={closeDeleteWarning}>
				<DialogTitle>Delete Case</DialogTitle>
				<DialogContent>
					{loading ? (
						<CircularProgress />
					) : (
						<Box>
							<DialogContentText>
								Delete Case {selectedCaseId}?
							</DialogContentText>
							<DialogActions>
								<Button onClick={closeDeleteWarning}>No</Button>
								<Button
									onClick={() =>
										deleteCaseHandler(selectedCaseId)
									}>
									Yes
								</Button>
							</DialogActions>
						</Box>
					)}
				</DialogContent>
			</Dialog>
			{editCase ? (
				<EditCaseDialog
					open={editCase}
					handleClose={handleEditClose}
					procedure={selectedCase}
				/>
			) : null}
			<SpeedDial
				ariaLabel="add case speed dial"
				sx={{ position: "absolute", bottom: 16, right: 16 }}
				icon={<HealthAndSafety />}>
				<SpeedDialAction
					key="add-case"
					icon="+"
					tooltipTitle="Add Case"
					onClick={() => setAddCaseModal(!addCaseModal)}
				/>
			</SpeedDial>
		</div>
	);
}
